
#!/bin/bash
# YERAVAN Rebranding Script (Optimized)
echo "Starting YERAVAN Rebrand Migration..."

find . -type f -not -path '*/.*' -exec sed -i 's/Naghli/YERAVAN/g' {} +
find . -type f -not -path '*/.*' -exec sed -i 's/naghli/yeravan/g' {} +

echo "Success: Project files updated to YERAVAN."
