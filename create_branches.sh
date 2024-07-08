#!/bin/bash

# List of branch names
branches=("node_task_01" "node_task_02" "node_task_03" "node_task_04" "node_task_05" "node_task_06" "node_task_07")

# Loop through each branch name
for branch in "${branches[@]}"
do
    # Create a new branch
    git checkout -b "$branch"
    # Add a README file to each branch (optional)
    echo "# $branch" > README.md
    git add README.md
    git commit -m "Initialize $branch"
    # Push the branch to the remote repository
    git push -u origin "$branch"
done
