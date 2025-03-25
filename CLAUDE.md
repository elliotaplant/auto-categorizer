# CLAUDE.md

This file contains helpful information for Claude when working on this project.

## Project Overview

Auto-Categorizer is a Cloudflare Worker application that:
1. Receives emails forwarded from Amazon order confirmations
2. Extracts product names, prices, and order IDs
3. Stores this information in a Cloudflare D1 database
4. Periodically checks for matching transactions in YNAB
5. Updates YNAB transactions with product names as memos

## Important Files

- `src/registerOrder.js` - Extracts order details from emails and stores them in the database
- `src/addMemos.js` - Matches orders to YNAB transactions and updates memos
- `src/index.js` - Main worker that handles HTTP requests, email events, and scheduled events
- `schema.sql` - Database schema for the D1 database
- `wrangler.jsonc` - Cloudflare Worker configuration

## Regular Expressions

The application uses the following key regular expressions:

- Product Name: `/\[image:\s*(.*?)(?:\]|\n)/i` - Extracts text in image tags in HTML emails
- Order ID: `/(\d{3}-\d{7}-\d{7})/` - Extracts Amazon order IDs (format: 123-4567890-1234567)
- Price: `/Total\s+\$(\d+\.?\d*)/i` - Extracts total price (format: Total $XX.XX)

## Database Schema

The D1 database has a single table `amazon_orders` with the following columns:
- `id` - Auto-incrementing primary key
- `product_name` - Name of the product
- `price_cents` - Price in cents (integer)
- `order_id` - Amazon order ID
- `used` - Flag indicating if the order has been used to update a YNAB transaction (0=unused, 1=used)
- `created_at` - Timestamp when the order was created

## Common Tasks

### Running Tests

```bash
npm test
```

### Deploying Changes

```bash
npm run deploy
```

### Testing the API with an Example Email

```bash
npm run test-api
```

### Clearing Orders from the Database

```bash
npm run clear-orders
```

## Debugging

When debugging email processing issues:
1. Check the Cloudflare Worker logs to see the email content
2. Verify the regular expressions are matching correctly
3. Confirm data is being stored in the D1 database

When debugging YNAB integration:
1. Check the Cloudflare Worker logs for API responses
2. Verify the YNAB API token and budget ID are set correctly
3. Confirm transaction amounts match order prices