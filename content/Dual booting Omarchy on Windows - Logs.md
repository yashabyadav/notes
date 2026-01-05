---
creation date: 2026-01-03 22:20
modification date: Saturday 3rd January 2026 22:20:57
tags: [documentation, install-log, linux, windows,]
publish: true
---

## 2026-01-04
> [!success] Vanilla arch install successful
>I was able to install vanilla arch using `archinstall` command.
### `archinstall` notes:
- Booted into the Arch ISO and launched the installer by running `archinstall`
- In the **Archinstall main menu**, configured the following options:
#### Disk configuration

- Selected **Disk configuration**
- Chose **Manual Partitioning** (not `Auto`)
    - Reason: preserve existing Windows + BitLocker partitions
- Selected disk: `nvme0n1` (953.9 GB NVMe SSD)
- Reused the existing **EFI System Partition**:
    - Partition: `nvme0n1p1`
    - Filesystem: `FAT32`
    - Mountpoint: `/boot`
    - Flags: `boot, esp`
    - Did **not** format this partition
>[!warning] Don't format the EFI partition
>The EFI partition nvme0n1p1 is also the one that Windows uses, don't partition it! Mount it to `/boot` is enough
- Selected partition `nvme0n1p4` (~226 GB) as the Arch Linux target
    - Enabled **LUKS encryption** for this partition (because Omarchy is designed to be installed on an encrypted disk, as mentioned in the Omarchy install docs)
    - Gave it a passphrase (verified later with `cryptsetup open`)
- Inside the encrypted container:
    - Selected filesystem: **[[Linux#btrfs|Btrfs]]**
    - Used default Btrfs subvolume layout
    - Volume mountpoints:
	    - Subvolume: `@` , Mountpoint: `/` (this is the root subvolume)
	    - subvolume: `@home`, Mountpoint: `/`
	    - Deleted the other two partitions that were there by default (i think they started with `var/` ).

#### Bootloader

- Selected **Limine** as the bootloader
    - Reason: modern UEFI bootloader, simpler config than GRUB
#### Profile / Packages

- Selected a **minimal / base install**
- Kernel: `linux`
- Included:
    - `linux-firmware`
    - `amd-ucode`

#### Networking

-  Copied from ISO network settings
#### Users
- Created a root password
- Created a regular user
	- Enabled `sudo` access

#### Encryption

- Confirmed encryption settings when prompted
- Used LUKS for the root filesystem only

#### Install

- Reviewed summary screen carefully to ensure:
    - Windows partitions untouched
    - Correct EFI partition selected
    - Correct encrypted partition selected
- Confirmed installation
- `archinstall` completed without fatal errors

---


> [!bug] No option to boot into arch on boot menu
>I selected `limine` for boot management and it seems something went wrong, because the Arch installation doesn't appear on bootmenu.

### Troubleshooting methods I have tried so far

#### Verifying the installation from Arch ISO

- Booted back into the Arch ISO
- Confirmed disk layout using:`lsblk`
- Verified:
    - EFI partition `nvme0n1p1` exists
    - Arch partition `nvme0n1p4` exists

#### Verifying encryption

- Manually unlocked the encrypted partition:
    `cryptsetup open /dev/nvme0n1p4 cryptroot`
- Confirmed `/dev/mapper/cryptroot` appears in `lsblk`

#### Mounting the installed system manually

- Mounted the Btrfs root subvolume:
    `mount -o subvol=@ /dev/mapper/cryptroot /mnt`
- Mounted the EFI partition:
    `mount /dev/nvme0n1p1 /mnt/boot`
- Verified contents of `/mnt/boot`:
    - `vmlinuz-linux`
    - `initramfs-linux.img`
    - `amd-ucode.img`
    - `limine/limine.conf`
        
#### Checking Limine installation

- Searched EFI partition for Limine EFI binaries:
    `find /mnt/boot -iname "*.efi"`
- Found only:
    - Windows EFI binaries
    - systemd EFI binary
- **No Limine EFI binary present initially**

#### Attempted Limine repair

- Entered the installed system:
    `arch-chroot /mnt`
- Reinstalled Limine:
    `pacman -S limine`
- Discovered:
    - `limine-uefi-cd.bin` exists (ISO-only binary)
    - No disk-boot EFI binary installed automatically
- Manually created EFI directories:
    `mkdir -p /boot/EFI/limine mkdir -p /boot/EFI/BOOT`
- Manually copied Limine EFI binary into:
    - `/boot/EFI/limine/limine-uefi-x86_64.efi`
    - `/boot/EFI/BOOT/BOOTX64.EFI`

#### Firmware (BIOS) actions

- Entered ASUS UEFI firmware (ROG Zephyrus G14)
- Added a **custom boot entry** pointing to the Limine EFI binary
- Result:
    - Boot entry appears in BIOS
    - Selecting it produces **no output / returns immediately**
- Windows Boot Manager remains fully functional

#### Current understanding

- Arch installation itself is intact
- Kernel, [[Linux#initramfs|initramfs]], and encrypted root are valid
- Failure is isolated to **Limine EFI execution**
- Likely causes:
    - Incorrect Limine EFI binary type
    - ASUS firmware restrictions (Secure Boot / Fast Boot / EFI execution rules)

## 2026-01-03

>[!info] Zephyrus G14 boot menu key:
> Press `Esc`repeatedly after pressing the power button.

- Omarchy is supposed to have it's own disk 
	- To install it in dual boot with windows, the docs says to manually install vanilla arch with windows and then install Omarchy: https://learn.omacom.io/2/the-omarchy-manual/96/manual-installation
- I tried to follow the instructions from this video: https://youtu.be/kIhbAefF6ik?si=m4ONzW13qk4KVcmB , but the way the boot partition was setup in the video did not work for me: [6:23](https://www.youtube.com/watch?v=kIhbAefF6ik&t=383s) it said Invalid Configuration: Boot partition not found

