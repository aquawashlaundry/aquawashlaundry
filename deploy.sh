#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo ""
    echo "To deploy manually:"
    echo "1. Copy the contents of the 'dist' folder"
    echo "2. Push them to the 'gh-pages' branch or your main branch's root"
    echo ""
    echo "Or use GitHub Actions (already configured) - just push to main/master branch"
else
    echo "Build failed!"
    exit 1
fi

