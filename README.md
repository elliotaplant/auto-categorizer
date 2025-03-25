# Auto-Categorizer for YNAB

This application automatically adds Amazon product names to YNAB transactions.

## How It Works

1. **Email Forward**: Forward your Amazon order confirmation emails to the Cloudflare email address.
2. **Extract Information**: The app extracts product name, price, and order ID from the email.
3. **Update YNAB**: Every 30 minutes, the app checks for uncategorized Amazon transactions in YNAB and adds the product name as a memo.

## Setup

### Prerequisites

- Cloudflare account
- YNAB account with a Personal Access Token
- Amazon orders

### Installation

1. Clone this repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env` and fill in your YNAB personal access token and budget ID
4. Deploy to Cloudflare with `npm run deploy`

### Configuration

Set the following secrets in Cloudflare:

```
YNAB_PERSONAL_ACCESS_TOKEN - Your YNAB API token
BUDGET_ID - Your YNAB budget ID
```

## Usage

1. Forward Amazon order confirmation emails to your Cloudflare Worker's email address
2. The app stores the order details in a database
3. When a YNAB transaction matches the price of an order, the app updates the memo

## API Endpoints

- `POST /api/register-order` - Manually register an order by submitting email content
- `POST /api/add-memos` - Manually trigger the process of matching orders to YNAB transactions
- `GET /api/orders` - Get a list of all stored orders

## Development

- `npm run dev` - Start a local development server
- `npm test` - Run tests
- `npm run test-api` - Test the API with an example email
- `npm run clear-orders` - Clear all orders from the database

## Architecture

- Built as a Cloudflare Worker
- Uses Cloudflare D1 for storing order information
- Uses YNAB API for updating transactions
- Email parsing using regex patterns

## License

MIT