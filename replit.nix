{pkgs}: {
  deps = [
    pkgs.rsync
    pkgs.unzip
    pkgs.pkg-config
    pkgs.bash
    pkgs.postgresql
    pkgs.openssl
  ];
}
