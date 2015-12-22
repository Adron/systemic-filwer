[README.md](../README.md)

# sitrep.json Description

*Sample File Contents:*

    {
      "StampedTime": 1450744830734,
      "StampedDate": 21,
      "WatcherStat": {
        "Event": "someevent",
        "Path": "blagh",
        "Directory": false,
        "File": false
      }
    }

* **StampedTime** > This is time stamp of the exact time of the last config file write.
* **StampedDate** > This is date stamp of the exact date of the last config file write.
* **MatcherStat** > A JSON object as listed below:
     * Event > The event that just recently occurred.
     * Path > The path of the event that just occurred.
     * Directory > This is a boolean result of whether the last action was taken on a directory.
     * File > This is a boolean result of whether the last action was taken on a file.