# Sort + Limited result set does not re-show document
The issue is as follows:
1. Create a publication which returns a sorted + limited cursor
2. Load publication
3. Modify a document so it no longer appears in the sorted + limited result set
4. Modify the same document so it matches the sorted + limited result set

Expected: Document should disappear from publication in step #3, should appears again in step #4
Actual: Document disappears in step #3 but does NOT appear again in step #4

# Testing this repo
The `master` branch shows this issue whereas the `no-redis-oplog` branch shows how it works in normal Meteor without redis oplog.

1. git checkout master
2. npm start
3. Open [http://localhost:3000](http://localhost:3000)
4. Click "Delete" on one of the link results (this will call a method to update the doc, then undo the update after 5 seconds)
5. If you refresh the page, the document will appear again

The document should appear again after 5 seconds but does not. Will only appear again after refresh.