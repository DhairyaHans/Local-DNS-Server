# Toying with DNS

Inspiration from  [DNS Toys](https://www.dns.toys/), [DNS Toys Git](https://github.com/knadh/dns.toys)

This is a 'local' DNS server, that runs on your 'localhost' and uses the power of **Google Gemini**, to give you short one word or one liner responses to your Queries.

Its not a normal DNS Server that resolved IP addresses, Its a DNS server for your small queries.

## Steps to run

1. Install Dependencies 
    > npm install

2. Create a `.env` file, just like `example.env`, and add you _GEMINI_API_KEY_

3. Run the `index.js` file
    > npm index.js

4. Open Terminal, 

    * Windows
        > nslookup -type=txt your.query.separated.by.dot localhost
        
        e.g. nslookup -type=txt what.is.1024.bytes.in.mb localhost

    * Linux 
        > dig TXT @localhost -p 53 your.query.separated.by.dot

        e.g. dig TXT @localhost -p 53 what.is.2+2

## Improvements

1. Instead of relying on Gemini only, Add custom functions that handle the basic queries, like 2+2 or weather queries.

2. Create query syntax, like, `mumbai.time` or `calculate.2.+.2` etc and make custom functions and implement them

3. Make a package out of this, to use and integrate in the apps

4. Host it somewhere, like [DNS Toys](https://www.dns.toys/)

### Note

>Here, we are using **npm denamed** for DNS 

>We can use **dgram** to create a DNS Server from scratch

