# Updating the ONE IRM Presenter download

After building a new Windows installer:

1. Copy the new `.exe` into the website's `downloads` folder.
2. Use a clear filename, for example:

   `ONE-IRM-PRESENTER-0.1.7-Windows-x64-Setup.exe`

3. Open `script.js` and update the ONE IRM Presenter entry:

   - Change `version` to the new version.
   - Change `download` to the new filename inside `downloads/`.

4. Open `index.html` and update the Latest Releases card:

   - Change the displayed version number.
   - Change the download link's `href` to the new filename.

5. Change the number after `script.js?v=` in `index.html` so browsers load the updated file. For example, change `v=5` to `v=6`.
6. Start Live Server in VS Code and test both Download buttons.
7. After confirming the new download works, remove the older installer from `downloads` if it is no longer needed.

The filename used in `script.js` and `index.html` must exactly match the filename in `downloads`.
