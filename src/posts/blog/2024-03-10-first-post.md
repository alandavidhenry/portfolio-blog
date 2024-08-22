---
layout: layouts/post.njk
title: Useful Git commands
featuredImage: /images/uploads/git_logo.png
date: 2024-08-19T16:34:00.000Z
description: Some useful commands when using Git and GitHub
---

## Connecting to a new GitHub repo

1. Create a new repo on Github (do not make readme, .gitignore or licence files)
2. `git remote add origin &lt;remote_url&gt;`
3. Verify the remote URL: `git remote add origin &lt;remote_url&gt;`
4. Push: `git remote add origin &lt;remote_url&gt;`

## Change remote origin URL

1. Create a new repo on Github (do not make readme, .gitignore or licence files)
2. `git remote set-url origin <remote_url>`
3. Verify the remote URL: `git remote -v`
4. Make any changes
5. Push: `git push -u origin main`

## Rename Git master branch to main

1. `git branch -m master main`

2. `git push -u origin main`

## Changes

### Commit and push a change for the first time

1. `git add .`

2. `git commit -m "fix: add missing brackets"`

3. `git push -u origin <branch_name>` (this connects the local branch to the remote branch)

### Commit and push a change
1. `git add .`

2. `git commit -m "fix: add missing brackets"`

3. `git push`

### Undo a commit

`git reset --soft HEAD~1`