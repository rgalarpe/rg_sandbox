#!/bin/bash

# List of branch names to delete
branches=("node_task_01" "node_task_02" "node_task_03" "node_task_04" "node_task_05" "node_task_06" "node_task_07")

# Delete branches locally
for branch in "${branches[@]}"
do
    # Delete local branch
    git branch -D "$branch"
done

# Delete branches remotely (GitHub)
for branch in "${branches[@]}"
do
    # Delete remote branch
    git push origin --delete "$branch"
done
