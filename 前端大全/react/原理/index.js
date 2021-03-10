function interactiveUpdates$1(fn, a, b) {
    if (isBatchingInteractiveUpdates) {
      return fn(a, b);
    }
    // If there are any pending interactive updates, synchronously flush them.
    // This needs to happen before we read any handlers, because the effect of
    // the previous event may influence which handlers are called during
    // this event.
    if (!isBatchingUpdates && !isRendering && lowestPendingInteractiveExpirationTime !== NoWork) {
      // Synchronously flush pending interactive updates.
      performWork(lowestPendingInteractiveExpirationTime, false, null);
      lowestPendingInteractiveExpirationTime = NoWork;
    }
    var previousIsBatchingInteractiveUpdates = isBatchingInteractiveUpdates;
    var previousIsBatchingUpdates = isBatchingUpdates;
    isBatchingInteractiveUpdates = true;
    isBatchingUpdates = true;  // 把requestWork中的isBatchingUpdates标识改为true
    try {
      return fn(a, b);
    } finally {
      isBatchingInteractiveUpdates = previousIsBatchingInteractiveUpdates;
      isBatchingUpdates = previousIsBatchingUpdates;
      if (!isBatchingUpdates && !isRendering) {
        performSyncWork();
      }
    }
  }

  function requestWork(root, expirationTime) {
    addRootToSchedule(root, expirationTime);
  
    if (isRendering) {
      // Prevent reentrancy. Remaining work will be scheduled at the end of
      // the currently rendering batch.
      return;
    }
  
    if (isBatchingUpdates) {
      // Flush work at the end of the batch.
      if (isUnbatchingUpdates) {
        // ...unless we're inside unbatchedUpdates, in which case we should
        // flush it now.
        nextFlushedRoot = root;
        nextFlushedExpirationTime = Sync;
        performWorkOnRoot(root, Sync, false);
      }
      return;
    }
  
    // TODO: Get rid of Sync and use current time?
    if (expirationTime === Sync) {
      performSyncWork();
    } else {
      scheduleCallbackWithExpiration(expirationTime);
    }
  }