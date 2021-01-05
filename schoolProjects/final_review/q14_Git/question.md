## Git Question A (50%):

You have committed and pushed a bad change to your git repo.  How can you fix it (give exact command), without destroying history, since others might have pulled your bad change and based their changes on yours?  How does your stated solution work?

### Answer:
git revert <//commit id>
This will submit a new commit that will undo what was done in the faulty commit. Since this is a new commit, it wont destroy the history.

## Git Question B (50%):

How do you delete a local branch after completing work on it.  How would you delete a remote branch?

### Answer:
For a local branch, you must first switch to a different branch since git wont let you delete what you are currently working on. Then you would run git branch -d <//branch>
For a remote branch you would run something like, git push <//remote> --delete <//branch>
