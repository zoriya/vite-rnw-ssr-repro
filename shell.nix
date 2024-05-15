{pkgs ? import <nixpkgs> {}}:
  pkgs.mkShell {
    packages = with pkgs; [
      nodejs-18_x
      nodePackages.npm
      biome
    ];
  }
