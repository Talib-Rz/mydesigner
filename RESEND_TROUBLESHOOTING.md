# Resend Email Troubleshooting Guide

## Issue: User not receiving confirmation emails

Follow these steps to debug and fix:

### Step 1: Check Browser Console for Errors
1. Open your browser (press `F12`)
2. Go to **Console** tab
3. Fill out the contact form and submit
4. Look for any error messages
5. Share the error message - it will tell us exactly what went wrong

### Step 2: Check Server Logs
1. Look at your terminal where `npm run dev` is running
2. Check for any error messages after form submission
3. You should see console logs like:
   - `Admin email error: ...` 
   - `User confirmation email error: ...`

### Step 3: Common Issues & Solutions

#### ❌ "Invalid API Key"
- Your Resend API key is incorrect or expired
- Go to [Resend API Keys](https://resend.com/api-keys) and copy a new key
- Make sure to copy the entire key (it starts with `re_`)
- Update `.env.local` with the new key
- Restart your server: `npm run dev`

#### ❌ "Domain not found" or "Email address not verified"
- **This is the most common issue!**
- In Resend, you need to set up a domain or verify your email
- See "Setup Options" below

#### ❌ "Rate limited"
- You've sent too many emails in a short time
- Wait a few minutes and try again

### Step 4: Setup Options

Choose ONE of these options:

#### **Option A: Add Custom Domain (Recommended)**
1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click **"Add Domain"**
3. Enter your domain (e.g., `mydesigner.com`)
4. Follow DNS setup instructions
5. Once verified, update your code:
   ```typescript
   from: 'contact@mydesigner.com'  // or noreply@mydesigner.com
   ```

#### **Option B: Use Resend's Free Domain (Quick Fix)**
1. Go to [Resend Dashboard](https://resend.com/emails)
2. Send a test email using their interface
3. This will activate your account for onboarding@resend.dev
4. Then our code should work

#### **Option C: Verify Your Email in Resend**
1. Go to [Resend Dashboard](https://resend.com)
2. Look for email verification prompts
3. Verify your email address
4. Update `.env.local`:
   ```
   CONTACT_EMAIL=your-verified-email@gmail.com
   ```

### Step 5: Test Email Sending

Test directly in Resend:
1. Go to [Resend Dashboard](https://resend.com/emails)
2. Click **"Send Email"**
3. Use `onboarding@resend.dev` as the "From"
4. Send to your test email
5. Check if you receive it

If this test works, our form will work too!

### Step 6: Restart and Try Again

After making changes:
```bash
npm run dev
```

Then test the form again.

## Need More Help?

- Check [Resend Docs](https://resend.com/docs)
- Look at server console for specific error messages
- Try the direct test in Resend dashboard first

## Quick Checklist

- [ ] API key is set in `.env.local` (starts with `re_`)
- [ ] Domain is added OR email is verified in Resend
- [ ] Server has been restarted after `.env.local` changes
- [ ] Test email works in Resend dashboard
- [ ] Browser console shows no errors
- [ ] No typos in email addresses
