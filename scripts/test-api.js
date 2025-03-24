const fs = require('fs');
const path = require('path');

// Dynamically import the example email from your test file
async function main() {
  try {
    // Get the absolute path to your example-email.js file
    const emailModulePath = path.resolve(__dirname, '../test/example-email.js');
    
    // Read the file content directly (since we can't use dynamic import in Node without extra config)
    const emailFileContent = fs.readFileSync(emailModulePath, 'utf8');
    
    // Extract the email string from the module content using regex
    const emailMatch = emailFileContent.match(/EXAMPLE_EMAIL\s*=\s*`([\s\S]*?)`/);
    
    if (!emailMatch || !emailMatch[1]) {
      throw new Error('Could not extract email content from the file');
    }
    
    const emailContent = emailMatch[1];
    
    // Send the email to your API endpoint
    console.log('Sending request to API...');
    const response = await fetch('https://auto-categorizer.elliotplant.workers.dev/api/register-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: emailContent
    });
    
    // Log the response
    const responseText = await response.text();
    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${responseText}`);
    
    // After success, retrieve and display all orders
    console.log('\nFetching current orders from database...');
    const ordersResponse = await fetch('https://auto-categorizer.elliotplant.workers.dev/api/orders');
    const ordersData = await ordersResponse.json();
    console.log('Current Orders in Database:');
    console.log(JSON.stringify(ordersData, null, 2));
    
  } catch (error) {
    console.error('Error:', error);
  }
}

main();