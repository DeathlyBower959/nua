# Contributing

## Git Flow

### New Feature

1. Confirm on develop branch

   ```sh
   git switch develop
   ```

2. Create a new feature branch

   ```sh
   # Git switch auto checks out to the new branch
   git switch -c feature/FEATURE-NAME
   ```

3. Push changes

   ```sh
   git add .
   git commit -m "Feat: MESSAGE"
   git push -u origin feature/FEATURE-NAME
   ```

4. Create a pull request

   ```sh
   gh pr create --base develop --web
   ```

5. Merge pull request back into develop

   > I suggest waiting for a reviewer before merging

   Once any checks complete, merge the branch

   ```sh
   # Use web "Merge pull request" or:
   gh pr merge
   ```

6. Pull back changes into local

   ```sh
   git switch develop
   git pull
   ```

### New Release

1. Confirm on develop branch

   ```sh
   git switch develop
   ```

2. Create a new release branch

   ```sh
   # Git switch auto checks out to the new branch
   # v1.0.0 -> major.minor.patch
   # You can use "git tag" to see all the existing tags, if you are unsure of what version we are currently on
   git switch -c release/v1.0.0
   ```

3. Make any changes that are necessary (bumping version in app, really quick small hotfixes)

4. Push changes

   ```sh
   git add .
   git commit -m "Release v1.0.0"
   git tag v1.0.0
   git push -u origin release/v1.0.0
   ```

5. Create a pull request

   ```sh
   gh pr create --base main --web
   ```

6. Merge pull request back into main

   > I suggest waiting for a reviewer before merging

   Once any checks complete, merge the branch

   ```sh
   # Use web "Merge pull request" or:
   gh pr merge
   ```

7. Pull back changes into local

   ```sh
   git switch main
   git pull
   ```

8. Pull changes back into development (and sync with github)

   ```sh
   git switch develop
   git merge main
   git push
   ```
