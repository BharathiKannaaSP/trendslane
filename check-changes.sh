git diff --quiet $(git merge-base origin/main HEAD) HEAD -- apps/admin/
echo $?