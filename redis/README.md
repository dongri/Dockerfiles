### Build
$ docker build -t redis .

### Run
$ docker run -d -p 6379:26379 redis

### Max OS X
$ VBoxManage controlvm "boot2docker-vm" natpf1 "redis,tcp,127.0.0.1,26379,,26379"
$ redis-cli -p 26379


ポートフォワーディングは
OSX 26379 ---> VirtualBox 26379 ---> redis 6379


ポート変わった時に
% VBoxManage controlvm "boot2docker-vm" natpf1 "redis,tcp,127.0.0.1,26379,,26379"
VBoxManage: error: A NAT rule of this name already exists
VBoxManage: error: Details: code NS_ERROR_INVALID_ARG (0x80070057), component NATEngine, interface INATEngine, callee nsISupports
VBoxManage: error: Context: "AddRedirect(Bstr(strName).raw(), proto, Bstr(strHostIp).raw(), RTStrToUInt16(strHostPort), Bstr(strGuestIp).raw(), RTStrToUInt16(strGuestPort))" at line 564 of file VBoxManageControlVM.cpp
% VBoxManage controlvm "boot2docker-vm" natpf1 delete redis
% VBoxManage controlvm "boot2docker-vm" natpf1 "redis,tcp,127.0.0.1,26379,,26379"
%
ポート確認
% VBoxManage showvminfo boot2docker-vm | grep '^NIC'
