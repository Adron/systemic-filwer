# Systemic File Watcher

Systemic file watcher for managing inbound files.

Features:  (Rough draft of features)

 * Watches for all files and directories in file location X.
 * Watches for file(s) set in watcher-settings.json config file at location X.
 * Watches for file(s) set in watcher-settings.json config file at location specified in watcher-settings.json config file.
 * Reports to console what is going on with files in location X. (Prospecitvely add additional logging later)
 * Once file is discovered new (add & change occurs) file is placed in location Y.
 * Once file is discovered new (add & change occurs) file is copied to location as specified in the watcher-settings.json file.