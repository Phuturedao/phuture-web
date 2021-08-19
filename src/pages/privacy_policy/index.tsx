import { Container, Link } from '@material-ui/core'
import DiscordIcon from 'assets/icons/landing/DiscordIcon.svg'
import GitbookIcon from 'assets/icons/landing/GitbookIcon.svg'
import GitIcon from 'assets/icons/landing/GitIcon.svg'
import LinkedInIcon from 'assets/icons/landing/LinkedInIcon.svg'
import MediumIcon from 'assets/icons/landing/MediumIcon.svg'
import TelegramIcon from 'assets/icons/landing/TelegramIcon.svg'
import TwitterIcon from 'assets/icons/landing/TwitterIcon.svg'
import { LandingHeader } from 'components/landing_header'
import React from 'react'
import { colors } from 'utils/mui'
import { useStyles as useFooterStyles } from '../landing/styles'
import { useStyles } from './styles'

const PrivacyPolicy = (): JSX.Element => {
  const footerClasses = useFooterStyles()
  const classes = useStyles()

  return (
    <Container>
      <LandingHeader />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ color: colors.white }}>
          <h1 className={classes.h1Styles}>Privacy and Cookie Policy</h1>
          <h3>1. Application of this policy</h3>
          <p>
            This Privacy and Cookie Policy applies to personal data controlled and/or processed by Phuture Labs Limited.
            It includes the following:
          </p>
          <ul>
            <li>
              <p>
                The terms on which we process personal data contributed via the website at{' '}
                <Link className={classes.blueLink} target="_blank" rel="noreferrer" href="https://www.phuture.finance">
                  https://www.phuture.finance
                </Link>{' '}
                (&quot;the Site&quot;);
              </p>
            </li>
            <li>
              <p>Information on the cookies used on the Site.</p>
            </li>
          </ul>
          <h3>2. Personal data</h3>
          <p>
            In this Policy, the term &quot;personal data&quot; means any information or combination of information that
            could be used to identify a living individual.
          </p>
          <h3>3. What information do we collect?</h3>
          <p>3.1. We collect and process various items of information that you provide to us. These may include:</p>
          <ul>
            <li>
              <p>personal contact details such as name, address, telephone number and e-mail address;</p>
            </li>
            <li>
              <p>your preferences regarding information and events;</p>
            </li>
            <li>
              <p>your personal and/or employment history, specialities and experience;</p>
            </li>
            <li>
              <p>your social media accounts and related links.</p>
            </li>
          </ul>
          <p>
            3.2. We may collect information from other sources in order to ensure that your personal information is
            accurate and kept up to date. This data may be combined with other information that we collect and use for
            the purposes described in this Policy.
          </p>
          <p>
            We also collect certain types of information automatically, such as your Internet Protocol (IP) address or
            device identifier, your device’s operating system, browser type, websites visited before or after you visit
            the Site, pages viewed and activities at the Site.
          </p>
          <p>
            3.3. This information is collected directly from you, as well as through third parties that you have
            authorised to provide such information.
          </p>
          <h3>4. How do we use your personal data?</h3>
          <p>4.1. We may use your personal data for a variety of purposes, including:</p>
          <ul>
            <li>
              <p>to provide services that you request;</p>
            </li>
            <li>
              <p>to communicate with you;</p>
            </li>
            <li>
              <p>to deliver information about us and the work we do;</p>
            </li>
            <li>
              <p>to improve our websites and services;</p>
            </li>
            <li>
              <p>and for other legitimate business purposes explained below.</p>
            </li>
          </ul>
          <p>
            4.2. We may send you marketing emails on topics which we think may be of interest to you. We will always
            offer you an “opt-out” option, which you may use at any time you wish to cease receiving e-mails or other
            information from us.
          </p>
          <p>
            4.3. We use a tool called Amplitude to collect information about your use of our services. We use this
            information to improve our services. Amplitude’s ability to use and share information is governed by
            Amplitude’s Terms of Service at{' '}
            <Link className={classes.blueLink} target="_blank" rel="noreferrer" href="https://amplitude.com/terms">
              https://amplitude.com/terms
            </Link>{' '}
            and its Privacy Policy at{' '}
            <Link className={classes.blueLink} target="_blank" rel="noreferrer" href="https://amplitude.com/privacy">
              https://amplitude.com/privacy
            </Link>
            .
          </p>
          <h3>5. To whom do we disclose your personal data?</h3>
          <p>5.1. We may disclose your information:</p>
          <ul>
            <li>
              <p>To other companies connected with us; </p>
            </li>
            <li>
              <p>
                To companies we have engaged to provide services on our behalf, under conditions of confidentiality.
              </p>
            </li>
          </ul>
          <p>5.2. We may also need to disclose your information for the following purposes:</p>
          <ul>
            <li>
              <p>To comply with the law or respond to lawful requests from government or regulatory agencies; </p>
            </li>
            <li>
              <p>
                Where we have reason to believe that disclosure is necessary to protect the safety of our staff,
                customers or the public.
              </p>
            </li>
          </ul>
          <p>
            5.3. Please note that the Site may include links to third party websites whose privacy practices may differ
            from our own. If you submit personal information to any of those websites, your information is governed by
            the privacy policies on those websites. We encourage you to review the privacy policy of any website you
            visit.
          </p>
          <h3>6. How long do we store your information?</h3>
          <p>
            We retain and store your personal data only for as long as we have a legitimate business purpose to do so
            and in accordance with our data retention policies.
          </p>
          <h3>7. Your rights</h3>
          <p>7.1. You have the following rights in relation to your personal data:</p>
          <ul>
            <li>
              <p>The right of access to your personal data;</p>
            </li>
            <li>
              <p>The right of rectification of inaccurate data;</p>
            </li>
            <li>
              <p>
                The right of erasure of your personal data where there is no longer any legitimate basis for processing
                it (sometimes known as the &quot;right to be forgotten&quot;);
              </p>
            </li>
            <li>
              <p>
                (in the circumstances provided for in applicable law) the right to restrict processing, object to
                processing, and the right to data portability.
              </p>
            </li>
          </ul>
          <p>
            7.2. Where the processing of your personal data is based on your consent, you have the right to withdraw
            consent at any time, without affecting the lawfulness of processing based on your consent before its
            withdrawal.
          </p>
          <p>
            7.3. If you wish to exercise any of the rights set out above, please contact{' '}
            <Link className={classes.blueLink} rel="noreferrer" href="mailto:info@phuture.finance">
              info@phuture.finance
            </Link>
            .
          </p>
          <p>
            7.4. You have the right to lodge complaints about the processing of your personal data with a data
            protection supervisory authority in your country of residence.
          </p>
          <h3>8. Cookies</h3>
          <p>
            8.1. The Site uses &quot;cookies&quot; and other tracking technologies to ensure the best possible
            experience for the user.
          </p>
          <p>What are cookies and tracking technologies?</p>
          <p>
            8.2. Cookies are pieces of information stored in your hard drive by the web server of the visited website.
            The server provides the browser with a cookie to save. They are used to make browsing the internet an easier
            experience. Cookies do not contain any information that personally identifies you, but personal information
            that we store about you may be linked, by us, to the information stored in and obtained from cookies.
          </p>
          <p>
            8.3. For more information about cookies, please see the Interactive Advertising Bureau’s website:{' '}
            <Link className={classes.blueLink} target="_blank" rel="noreferrer" href="http://www.allaboutcookies.org">
              http://www.allaboutcookies.org
            </Link>
            .
          </p>
          <p>
            8.4. Tracking technologies include web beacons/GIFs, pixels, page tags and scripts. Emails and mobile apps
            may contain small transparent image files or lines of code to record how you interact with them. This
            information is used to help website and app publishers better analyse and improve their services.
          </p>
          <p>
            8.5. In this Policy, cookies and tracking technologies are collectively referred to as &quot;cookies&quot;.
          </p>
          <p>How do we use cookies?</p>
          <p>&quot;Strictly necessary&quot; cookies</p>
          <p>
            8.6. We use some cookies for purposes which are strictly necessary for your use of the Site. These may
            include, for example, cookies which remember your preferences and settings; which remember information that
            you may enter online (so that it does not have to be re-entered every time you move to another page); or
            which keep you logged in to portals that we may offer where you wish this to happen.
          </p>
          <p>Performance cookies</p>
          <p>
            8.7. Where you have permitted the use of performance cookies, we use Google Analytics to analyse the use of
            the Site. Google Analytics generates statistical and other information about website use by means of
            cookies, which are stored on user&apos;s computers. These cookies collect information such as your IP
            address or other identifiers, browser information, and information about the content you view and interact
            with to record how you use the Site. The information generated helps us to know how many users we have,
            which parts of the Site are most popular, what browsers are used (so we can maximize compatibility), the
            country or region where our users are located, and the demographics and interests of our users. This enables
            us to better understand who is using the Site and to improve how we present content.
          </p>
          <p>
            8.8. Google will store this information. Google&apos;s privacy policy is available at:{' '}
            <Link
              className={classes.blueLink}
              target="_blank"
              rel="noreferrer"
              href="http://www.google.com/privacypolicy.html"
            >
              http://www.google.com/privacypolicy.html
            </Link>
            . Google Analytics cookies may retain information for up to two years. You can opt out of Google Analytics
            by visiting{' '}
            <Link
              className={classes.blueLink}
              target="_blank"
              rel="noreferrer"
              href="https://tools.google.com/dlpage/gaoptout/"
            >
              https://tools.google.com/dlpage/gaoptout
            </Link>
            .
          </p>
          <p>Managing cookies</p>
          <p>
            8.9. When you first visit the Site you will be presented with a banner which offers you a choice about
            whether to accept or reject cookies of different types, with the exception of those cookies which are
            strictly necessary for a particular service.
          </p>
          <p>8.10. If you wish to amend your choice at any time, you can do so using the link below.</p>
          <div className={classes.cookiesBox}>
            <Link
              style={{ textAlign: 'center' }}
              className={classes.blueLink}
              rel="noreferrer"
              href="javascript:window.Confirmic('ConsentManager:show')"
            >
              Manage Cookie Preferences
            </Link>
          </div>

          <p>Managing Cookies and Local Storage on Your Device</p>
          <p>
            8.11. If you wish, you can also choose how web browser cookies are handled by your device via your browser
            settings. Some devices allow you to control this through your device settings. If you choose not to receive
            cookies at any time, websites may not function properly and certain services will not be provided. Each
            browser and device is different, so check the settings menu of the browser or device to learn how to change
            your settings and cookie preferences.
          </p>
          <h3>9. Changes to this policy</h3>
          <p>
            We may update this Policy from time to time, so please visit this page periodically and review the Policy
            for changes.
          </p>
          <h3>10. How can you contact us?</h3>
          <p>
            You may contact us by email at{' '}
            <Link className={classes.blueLink} rel="noreferrer" href="mailto:info@phuture.finance">
              info@phuture.finance
            </Link>
            .
          </p>
        </div>
      </div>
      <div className={footerClasses.footer}>
        <div style={{ margin: '0 auto 25px auto' }}>
          <Link
            className={classes.blueLink}
            target="_blank"
            rel="noreferrer"
            href="https://phuture.gitbook.io/phuture/"
          >
            <img className={footerClasses.iconsMargin} src={GitbookIcon} alt="gitbook-in-icon" />
          </Link>
          <Link className={classes.blueLink} target="_blank" rel="noreferrer" href="https://github.com/Phuturedao">
            <img className={footerClasses.iconsMargin} src={GitIcon} alt="github-in-icon" />
          </Link>
          <Link className={classes.blueLink} target="_blank" rel="noreferrer" href="http://discord.gg/frRD3Ck">
            <img className={footerClasses.iconsMargin} src={DiscordIcon} alt="discord-icon" />
          </Link>
          <Link
            className={classes.blueLink}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/phuture-finance/"
          >
            <img className={footerClasses.iconsMargin} src={LinkedInIcon} alt="linked-in-icon" />
          </Link>
          <Link
            className={classes.blueLink}
            target={'_blank'}
            rel="noreferrer"
            href="https://phuture-finance.medium.com/"
          >
            <img className={footerClasses.iconsMargin} src={MediumIcon} alt="medium-icon" />
          </Link>
          <Link className={classes.blueLink} target="_blank" rel="noreferrer" href="https://t.me/phuture_group">
            <img className={footerClasses.iconsMargin} src={TelegramIcon} alt="telegram-icon" />
          </Link>
          <Link className={classes.blueLink} target="_blank" rel="noreferrer" href="https://twitter.com/phuturedao">
            <img className={footerClasses.iconsMargin} src={TwitterIcon} alt="twitter-icon" />
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default PrivacyPolicy
