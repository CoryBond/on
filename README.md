# CoryBond.github.io
My github website!

# Deployment

This website is deployed on github and previously my own raspberry pi server.

To access the github deployment please go to: https://corybond.github.io/

Access to the raspberry pi server has been disconnected as I no longer have control over my IP address at my apartment.

# GH-PAGES

Because only the master branch can be used for github personal websites we have to deploy to that branch instead of gh-pages.
In package.json you should see the script as : __"deploy": "gh-pages -d build -b master"__

Always make sure after deploying you reconfigure the settings for the project as you might have to add a CNAME file that can be done on the github settings tab.

# To Do

Add a README.md and CNAME to the build folder automatically with ncp. This way some of the deployment steps will be mitigated and a proper readme will show when looking at the project.