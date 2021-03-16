## HTTPS
是http和tcp中间建立的一个安全层，http与tcp通信的时候，必须先经过安全层进行加密，用加密后的数据包tcp。之后在另一端用安全层解密之后传给http。

## HTTPS通道建立的过程
1. 浏览器 client_random、加密方法列表 => 服务端
2. 服务端 server_random、加密方法列表、数字证书（包含公钥） => 浏览器
3. 浏览器校验数字证书合法性，如果验证通过，生成 pre_random，用公钥加密后 => 服务端
4. 服务端 client_random、server_random 和 pre_random ，用公钥加密生成