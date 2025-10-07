#!/bin/bash

echo "🧪 Portfolio Implementation Verification Script"
echo "=============================================="
echo ""

# Test 1: Check if main files exist
echo "📁 File Existence Check:"
files=("index.html" "css/style.css" "js/main.js")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file not found"
    fi
done
echo ""

# Test 2: Check for key HTML elements
echo "🔍 HTML Elements Check:"
if [ -f "index.html" ]; then
    position_cards=$(grep -c 'class="position-card"' index.html)
    project_cards=$(grep -c 'class="project-card"' index.html)
    cert_cards=$(grep -c 'class="certification-card"' index.html)
    
    echo "📋 Position cards found: $position_cards"
    echo "🎯 Project cards found: $project_cards"
    echo "🏆 Certification cards found: $cert_cards"
    
    if [ "$project_cards" -gt 6 ]; then
        echo "✅ Sufficient projects for 6+ display optimization"
    else
        echo "⚠️  Only $project_cards projects found (optimization may not trigger)"
    fi
else
    echo "❌ index.html not found"
fi
echo ""

# Test 3: Check JavaScript functions
echo "🔧 JavaScript Functions Check:"
if [ -f "js/main.js" ]; then
    if grep -q "initializeExperienceDropdown" js/main.js; then
        echo "✅ Experience dropdown function found"
    else
        echo "❌ Experience dropdown function missing"
    fi
    
    if grep -q "initializeProjectsSection" js/main.js; then
        echo "✅ Projects section function found"
    else
        echo "❌ Projects section function missing"
    fi
    
    if grep -q "toggleCard" js/main.js; then
        echo "✅ Toggle functionality implemented"
    else
        echo "❌ Toggle functionality missing"
    fi
    
    if grep -q "View All Projects" js/main.js; then
        echo "✅ View All Projects button implementation found"
    else
        echo "❌ View All Projects button implementation missing"
    fi
else
    echo "❌ js/main.js not found"
fi
echo ""

# Test 4: Check CSS styling
echo "🎨 CSS Styling Check:"
if [ -f "css/style.css" ]; then
    if grep -q ".position-details" css/style.css; then
        echo "✅ Experience dropdown styles found"
    else
        echo "❌ Experience dropdown styles missing"
    fi
    
    if grep -q ".certification-card" css/style.css; then
        echo "✅ Certification card styles found"
    else
        echo "❌ Certification card styles missing"
    fi
    
    if grep -q "view-all-projects-btn" css/style.css; then
        echo "✅ Projects button styles found"
    else
        echo "⚠️  Projects button styles may be inline"
    fi
    
    if grep -q "min-height.*320px" css/style.css; then
        echo "✅ Uniform card height constraints found"
    else
        echo "⚠️  Uniform height styling may be different"
    fi
else
    echo "❌ css/style.css not found"
fi
echo ""

# Test 5: File size check (basic integrity)
echo "📊 File Integrity Check:"
if [ -f "index.html" ]; then
    html_size=$(wc -c < index.html)
    echo "📄 index.html size: $html_size bytes"
    if [ "$html_size" -gt 10000 ]; then
        echo "✅ HTML file appears to have substantial content"
    else
        echo "⚠️  HTML file seems small"
    fi
fi

if [ -f "css/style.css" ]; then
    css_size=$(wc -c < css/style.css)
    echo "🎨 style.css size: $css_size bytes"
    if [ "$css_size" -gt 20000 ]; then
        echo "✅ CSS file appears to have substantial styling"
    else
        echo "⚠️  CSS file seems small"
    fi
fi

if [ -f "js/main.js" ]; then
    js_size=$(wc -c < js/main.js)
    echo "⚙️  main.js size: $js_size bytes"
    if [ "$js_size" -gt 5000 ]; then
        echo "✅ JavaScript file appears to have substantial functionality"
    else
        echo "⚠️  JavaScript file seems small"
    fi
fi

echo ""
echo "🎯 Verification completed!"
echo "📋 Summary: Check the results above for any issues"
echo "🚀 To test functionality, open index.html in a web browser"