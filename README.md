[![Systemic Filwer](./logo/Systemic-DNA-Code-filwer-256x256.png)](./logo/Systemic-DNA-Code-filwer-256x256.png)

# Systemic Filwer

[![Build Status](https://travis-ci.org/Adron/systemic-filewatcher.svg?branch=master)](https://travis-ci.org/Adron/systemic-filewatcher)

Systemic file watcher for managing inbound files.

Features:  (Rough draft of features)

 * Watches for all files and directories in file location X.
 * Watches for file(s) set in watcher-settings.json config file at location X.
 * Watches for file(s) set in watcher-settings.json config file at location specified in watcher-settings.json config file.
 * Reports to console what is going on with files in location X. (Prospecitvely add additional logging later)
 * Once file is discovered new (add & change occurs) file is placed in location Y.
 * Once file is discovered new (add & change occurs) file is copied to location as specified in the watcher-settings.json file.

### Design intent for *.json config files:

#### sitrep.json Description [here](docs/sitrep.json.md)

#### options.json Description [here](docs/options.json.md)
