import re
import os

out_dir = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(out_dir, 'build.js'), 'r', encoding='utf-8') as f:
    js_code = f.read()

# Extract header
header_match = re.search(r'const headerHTML = `(.*?)`;\n\nconst footerHTML', js_code, re.DOTALL)
header_html = header_match.group(1)

# Extract footer
footer_match = re.search(r'const footerHTML = `(.*?)`;\n\nconst htmlWrapper', js_code, re.DOTALL)
footer_html = footer_match.group(1)

def build_html(title, content, has_header_footer):
    h = header_html if has_header_footer else ''
    f_html = footer_html if has_header_footer else ''
    return f"""<!DOCTYPE html>
<html lang="en" class="scroll-smooth" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title} | LegacyVault - Digital Estate & Password Legacy Service</title>
  <meta name="description" content="Secure your digital legacy, manage passwords, and ensure your loved ones have secure access to your digital estate with LegacyVault.">
  
  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Crect width='512' height='512' rx='100' fill='%234f46e5' /%3E%3Cg transform='translate(128, 128) scale(0.5)' fill='%23ffffff'%3E%3Cpath d='M256 0c-14.7 0-28.7 6-39 16.7L42.5 197.3C15.3 225 0 263.6 0 304v96c0 61.9 50.1 112 112 112h144V0z' /%3E%3Cpath opacity='0.75' d='M256 0v512h144c61.9 0 112-50.1 112-112v-96c0-40.4-15.3-79-42.5-106.7L295 16.7C284.7 6 270.7 0 256 0z' /%3E%3C/g%3E%3C/svg%3E" type="image/svg+xml">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  
  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Tailwind Config -->
  <script>
    tailwind.config = {{
      darkMode: 'class',
      theme: {{
        extend: {{
          fontFamily: {{
            sans: ['Inter', 'sans-serif'],
            heading: ['Outfit', 'sans-serif'],
          }},
          colors: {{
            indigo: {{
              50: '#eef2ff',
              100: '#e0e7ff',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              900: '#312e81',
            }}
          }},
          animation: {{
            'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
          }},
          keyframes: {{
            fadeInUp: {{
              '0%': {{ opacity: 0, transform: 'translateY(20px)' }},
              '100%': {{ opacity: 1, transform: 'translateY(0)' }},
            }}
          }}
        }}
      }}
    }}
  </script>
  
  <!-- Custom Styles -->
  <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans min-h-screen flex flex-col transition-colors duration-300">
  
  {h}

  <main class="flex-grow flex flex-col w-full">
    {content}
  </main>

  {f_html}

  <script src="script.js"></script>
</body>
</html>"""

# Extract pages
pages_str_match = re.search(r"const pages = \{(.*?)\n\};\n\n// Generate HTML", js_code, re.DOTALL)
if pages_str_match:
    pages_str = pages_str_match.group(1)
    
    # regex to find each page
    page_matches = re.finditer(r"'([^']+)':\s*\{\s*title:\s*'([^']+)',\s*hasHeaderFooter:\s*(true|false),\s*content:\s*`(.*?)`\n\s*\}", pages_str, re.DOTALL)
    
    for p in page_matches:
        filename = p.group(1)
        title = p.group(2)
        has_hf = p.group(3) == 'true'
        content = p.group(4)
        
        final_html = build_html(title, content, has_hf)
        with open(os.path.join(out_dir, filename), 'w', encoding='utf-8') as f:
            f.write(final_html)
        print(f"Created {filename}")

# Extract CSS
css_match = re.search(r"const cssContent = \\`\n(.*?)\\`;", js_code, re.DOTALL)
if css_match:
    with open(os.path.join(out_dir, 'styles.css'), 'w', encoding='utf-8') as f:
        f.write(css_match.group(1))
    print("Created styles.css")

# Extract JS
js_match = re.search(r"const jsContent = \\`\n(.*?)\\`;", js_code, re.DOTALL)
if js_match:
    with open(os.path.join(out_dir, 'script.js'), 'w', encoding='utf-8') as f:
        f.write(js_match.group(1))
    print("Created script.js")
