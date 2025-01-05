# Toying with DNS

This is a 'local' DNS server, that runs on your 'localhost' and uses the power of **Google Gemini**, to give you short one word or one liner responses to your Queries.

Its not a normal DNS Server that resolved IP addresses, Its a DNS server for your small queries.

## Steps to run

1. Install Dependencies 
    > npm install

2. Create a `.env` file, just like `example.env`, and add you _GEMINI_API_KEY_

3. Run the `index.js` file
    > npm index.js

4. Open Terminal, (Windows)
    > nslookup -type=txt your.query.separated.by.dot localhost
    
    e.g. nslookup -type=txt what.is.1024.bytes.in.mb localhost

## Improvements

Here, we are using **npm denamed** for DNS 

We can use **dgram** to create a DNS Server from scratch
