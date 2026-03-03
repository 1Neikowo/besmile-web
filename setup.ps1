$ErrorActionPreference = "Stop"
Remove-Item -Recurse -Force package.json, package-lock.json, node_modules -ErrorAction Ignore
Write-Host "Running create-next-app..."
npx --yes create-next-app@latest my-app --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm --yes
Write-Host "Moving files..."
Copy-Item -Path "my-app\*" -Destination "." -Recurse -Force
Copy-Item -Path "my-app\.eslintrc.json", "my-app\.gitignore", "my-app\.npmrc" -Destination "." -Force -ErrorAction Ignore
Remove-Item -Recurse -Force "my-app"
Write-Host "Installing dependencies..."
npm install framer-motion clsx tailwind-merge lucide-react @tabler/icons-react @radix-ui/react-icons @radix-ui/react-slot class-variance-authority
New-Item -ItemType Directory -Force -Path "components/ui"
New-Item -ItemType Directory -Force -Path "lib"
Write-Host "Done!"
