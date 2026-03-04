FROM debian:13-slim AS build

WORKDIR /vazirharf

RUN apt-get update

RUN DEBIAN_FRONTEND=noninteractive apt-get install -y fontmake fonttools gftools zip sed git make

# download latest fontforge release from github because debian package has a bug
RUN apt-get install wget
RUN wget https://github.com/fontforge/fontforge/releases/download/20251009/FontForge-2025-10-09-Linux-x86_64.AppImage
RUN chmod +x FontForge-2025-10-09-Linux-x86_64.AppImage

# a hack to install appimage because of FUSE issues on docker containers
RUN ./FontForge-2025-10-09-Linux-x86_64.AppImage --appimage-extract
RUN sed -i '8s/.*/this_dir="$(dirname "$(readlink -f "$0")")"/' squashfs-root/AppRun
RUN ln -s /vazirharf/squashfs-root/AppRun /usr/local/bin/fontforge

COPY . .

RUN make all

FROM scratch

COPY --from=build /vazirharf/fonts* /fonts
COPY --from=build /vazirharf/misc* /misc
COPY --from=build /vazirharf/Round-Dots* /Round-Dots
COPY --from=build /vazirharf/Vazirharf-*font-face.css /vazirharf/vazirharf-v*.zip /
