# Welcome

This project is based on the tutorial available at [https://zeit.co/docs/integrations#creating-an-integration](https://zeit.co/docs/integrations#creating-an-integration)

**NOTE: According to the above [tutorial](https://zeit.co/docs/integrations#creating-an-integration), Safari has some issues when working with UIHooks running on `localhost`. Use a different web browser for local development.**

## Getting started

Once you have cloned this repo, you will want to do the following:

+ Create your integration on ZEIT Now
+ Add a configuration
+ Test your integration
+ Publish your integration

### Create your integration on ZEIT Now

Visit the [ZEIT Now Integrations Developer Console](https://zeit.co/dashboard/integrations/console) and click on `CREATE`

Fill out the form as guided - including the following values:

+ `Description` - Add a sentence or two to your liking
+ `Category` - Set this to `Experiments`
+ `Feature Images` - Add a publicly available image
+ `Privacy` - Leave as private unless you are really wanting to publish this publicly
+ `Redirect URL` - Leave this empty
+ `UI Hook URL` - Add `http://localhost:5005` to this field

### Add a configuration

Navigate to the [ZEIT Now Integrations Developer Console](https://zeit.co/dashboard/integrations/console) and select your newly created integration. Click on `View in Marketplace` and then click on `Add`.

Select the account you would like to add this integration to. Click `Add`.

### Test your integration

**IMPORTANT: DO NOT USE SAFARI** when trying to view your integration on `localhost`

![__images/safari-01.png](__images/safari-01.png)

If you view your locally running integration in Safari, you will see:

![__images/safari-02.png](__images/safari-02.png)
