# GitHub SSH Key Setup Cheat Sheet

Step           Command / Action                                     Description
-------------- ----------------------------------------------------     ------------------------------------------------------------
1. Generate    ssh-keygen -t ed25519 -C "maharaj_sandip@berkeley.edu"    Creates a new SSH key. Press Enter twice to accept
   Key                                                                   defaults for file location and passphrase.

2. Copy Key    cat ~/.ssh/id_ed25519.pub                                 Displays the public key. Copy the entire output.

3. Add to      Go to GitHub Settings > SSH and GPG keys > New...        Paste the copied key into your GitHub account to
   GitHub                                                               authorize your machine.

4. Test        ssh -T git@github.com                                    Verifies the connection works. A success message
   Connection                                                           will show your username.