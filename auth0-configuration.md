# Auth0 Roles Configuration

Auth0 **does not** include user roles in the ID Token by default. You **must** create a "Post Login" Action to add them as a Custom Claim.

## 1. Create the Action
1.  Go to **Auth0 Dashboard** > **Actions** > **Library**.
2.  Click **Build Custom**.
    -   **Name**: `Add Roles to ID Token`
    -   **Trigger**: `Login / Post Login`
    -   **Runtime**: Node 18 (or latest)
3.  Click **Create**.

## 2. Add Code
Paste the following code into the editor:

```javascript
exports.onExecutePostLogin = async (event, api) => {
  // Define a namespace for your custom claims
  // Auth0 requires this to be a URL-like format (does not need to be a real URL)
  const namespace = 'https://myapp.com';

  if (event.authorization) {
    // Add roles to the ID Token
    // Resulting claim will be 'https://myapp.com/roles'
    api.idToken.setCustomClaim(`${namespace}/roles`, event.authorization.roles);
    
    // Also add to Access Token if you need it for API calls
    api.accessToken.setCustomClaim(`${namespace}/roles`, event.authorization.roles);
  }
};
```

## 3. Deploy
1.  Click **Deploy** (top right).

## 4. Add to Flow
1.  Go to **Auth0 Dashboard** > **Actions** > **Flows**.
2.  Click **Login**.
3.  Drag your **Add Roles to ID Token** action from the "Custom" list (right side) into the flow diagram (between "Start" and "Complete").
4.  Click **Apply**.

## 5. Verify
Log out of your application and log back in. The console logs in `AuthService` should now see a key like `https://myapp.com/roles` containing your roles.
