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

## HOSTING

1. Get a domain name or just use the IP address

2. Spin an EC2 instance (AWS) and make port:53 'free'

3. Run the [code](index.js) on port:53 on the EC2 instance

4. Make sure, the Security groups allow the port:53 from all locations

5. Say, you get the IP of the EC2 instance, say, 10.101.10.101 -

    using nslookup -
    > nslookup -type=TXT your.query 10.101.10.101 
    
    
    using dig -
    > dig +short TXT your.query @10.101.10.101

6. If you have bought a Domain, say, `dns.demo.dev`, add a __Name Server (NS)__ record in the domain, with the IP 10.101.10.101 (i.e., your EC2 instance's IP). After this, you can run -

    using nslookup -
    > nslookup -type=TXT your.query dns.demo.dev
    
    
    using dig -
    > dig +short TXT your.query @dns.demo.dev
    



### Note

>Here, we are using **npm denamed** for DNS 

>We can use **dgram** to create a DNS Server from scratch

