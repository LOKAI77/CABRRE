<h1 align="center">
  <img src="https://i.ibb.co/ZzZQ7FSM/Bez-n-zvu-2.png" alt="Bez-n-zvu-2" border="0" width="400px">
  <br>
</h1>

<h4 align="center">One click pen-test tool manager</h4>


# FEATURES

![image](https://dev.geoplayer.cz/uploads/987af98da7fa98f7as9f7adf9.png)

- **Check for presence** of a preferred tool
- **One click installation** of the tools from the availables list
- **Tools curently available** for check and installation: METASPLOIT, XSS_VIBES, NMAP, FFUF, WPSCAN, DIG, KATANA, SUBFINDER

## INSTALLATION

Clone xploitmanager with git

bash
git clone https://github.com/LOKAI77/xploitmanager  
echo "export PATH=$PATH:~/xploitmanager" >> ~/.bashrc
source ~/.bashrc


## USAGE

console
xploit -h


This will display help for the tool. Here are all the switches it supports.

console
XPLOIT is a user-friendly tool that simplifies the installation of penetration
testing tools. It offers an intuitive interface, allowing you to easily search
for and install the tools you need. For more information, visit my GitHub page
at https://github.com/LOKAI77/xploitmanager.


--------------------------------------------------------------------------------
Usage:
--------------------------------------------------------------------------------
To use xploit, simply run the script from your terminal as follows:

  $ xploit [FLAGS]

--------------------------------------------------------------------------------
Flags:
--------------------------------------------------------------------------------

  -h, --help                Shows help message
  -t, --tool [STRING]       Check if the specified tools are installed (without installing them)
  -i, --install [STRING]    Install the specified tools if they are not already installed
  -l, --list                List all available tools that xploit can check/install
  -a, --all                 Run all available checks for tools (without installing them)

--------------------------------------------------------------------------------
Examples:
--------------------------------------------------------------------------------

1. Check if katana is installed:
   $ xploit -t katana

2. Install katana if missing:
   $ xploit -i katana

3. List available tools for installation/check:
   $ xploit -l

4. Run all checks and installations:
   $ xploit -a

--------------------------------------------------------------------------------
Important Notes:
--------------------------------------------------------------------------------

- Xploit performs the best in fresh and clean enviroments, you'll have higher chance of
  getting an error if you already have lots of other tools installed
- Made for Debian 12. (I dont guarantee sucessfull execution on other distributions)
- I dont take responsibility for misuse of tools provided for installation


## EXAMPLES
Check if katana is installed:

bash
xploit -t katana


Install katana if missing:

bash
xploit -i katana


List available tools for installation/check:

bash
xploit -l


Run all checks:

bash
xploit -a
