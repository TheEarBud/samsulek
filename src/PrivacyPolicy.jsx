import React from 'react';
import './PrivacyPolicy.css'; // Link to the CSS file

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p className='p'>
        This Privacy Policy describes how The Ear Bud™ (the “Site” or “we”) collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
      </p>

      <h2 className='h2'>Contact</h2>
      <p className='p'>
        After reviewing this policy, if you have additional questions, want more information about our privacy practices, or would like to make a complaint, please contact us by e-mail at <a href="mailto:official.ear.bud@gmail.com">official.ear.bud@gmail.com</a> or by mail using the details provided below:
      </p>
      <address>
        138 E 12300 S, United #627, Draper UT 84020, United States
      </address>

      <h2 className='h2'>Collecting Personal Information</h2>
      <p className='p'>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. We refer to any information about an identifiable individual as “Personal Information”. Below is a list of the types of Personal Information we collect and why.</p>

      <h3 className='h3'>Device Information</h3>
      <ul className='ul'>
        <li><strong>Purpose of collection:</strong> To load the Site accurately for you and to perform analytics on Site usage to optimize our Site.</li>
        <li><strong>Source of collection:</strong> Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li>
        <li><strong>Disclosure for a business purpose:</strong> Shared with our processor Shopify and other vendors we may use.</li>
        <li><strong>Personal Information collected:</strong> Version of web browser, IP address, time zone, cookie information, sites/products viewed, search terms, and interaction with the Site.</li>
      </ul>

      <h3 className='h3'>Order Information</h3>
      <ul className='ul'>
        <li><strong>Purpose of collection:</strong> To provide products/services, process payments, arrange shipping, and provide invoices/order confirmations. We also use this data to screen for fraud or risk and offer you related products/services.</li>
        <li><strong>Source of collection:</strong> Collected from you.</li>
        <li><strong>Disclosure for a business purpose:</strong> Shared with Shopify and other related vendors (payment gateways, shipping and fulfillment apps).</li>
        <li><strong>Personal Information collected:</strong> Name, billing address, shipping address, payment information (including credit card numbers), email address, phone number.</li>
      </ul>

      <h3 className='h3'>Customer Support Information</h3>
      <ul className='ul'>
        <li><strong>Purpose of collection:</strong> To provide customer support.</li>
        <li><strong>Source of collection:</strong> Collected from you when you contact us for assistance.</li>
        <li><strong>Disclosure for a business purpose:</strong> Shared with our customer support providers.</li>
      </ul>

      <h2 className='h2'>Minors</h2>
      <p className='p'>The Site is not intended for individuals under the age of 13. We do not intentionally collect Personal Information from children. If you are the parent or guardian and believe your child has provided us with Personal Information, please contact us to request deletion.</p>

      <h2 className='h2'>Sharing Personal Information</h2>
      <p className='p'>We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:</p>
      <ul className='ul'>
        <li>We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer">here</a>.</li>
        <li>We may share your Personal Information to comply with applicable laws and regulations, respond to subpoenas, or protect our rights.</li>
        <li>[Insert other service providers]</li>
      </ul>

      <h2 className='h2'>Behavioural Advertising</h2>
      <p className='p'>We use your Personal Information to provide you with targeted advertisements or marketing communications that we believe may interest you. For example:</p>
      <ul className='ul'>
        <li>We use Google Analytics to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer">here</a>.</li>
        <li>You can opt-out of Google Analytics <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">here</a>.</li>
        <li>[Insert other services used for remarketing/advertising]</li>
      </ul>

      <h2 className='h2'>Using Personal Information</h2>
      <p className='p'>We use your Personal Information to provide our services, which includes: offering products for sale, processing payments, shipping and fulfilling orders, and keeping you updated on new products, services, and offers.</p>

      <h2 className='h2'>Retention</h2>
      <p className='p'>We retain your Personal Information for as long as necessary to fulfill our services, unless you request its deletion. For more details, please refer to the "Your Rights" section below.</p>

      <h2 className='h2'>Automatic Decision-Making</h2>
      <p className='p'>We [DO/DO NOT] engage in fully automated decision-making that has a legal or significant effect using customer data. For example, Shopify uses automated decision-making to prevent fraud.</p>

      <h2 className='h2'>Your Rights</h2>
      <h3 className='h3'>GDPR (European Economic Area)</h3>
      <p className='p'>If you are a resident of the European Economic Area (EEA), you have the right to access, update, correct, or erase your Personal Information. For more details, please contact us.</p>

      <h3 className='h3'>CCPA (California Residents)</h3>
      <p className='p'>If you are a California resident, you have the right to access, update, correct, or erase your Personal Information. For more details, please contact us.</p>

      <h2 className='h2'>Cookies</h2>
      <p className='p'>We use cookies to improve your experience on our Site. Cookies help us remember your preferences, track site usage, and provide personalized ads. You can manage your cookie preferences through your browser settings.</p>

      <h2 className='h2'>Do Not Track</h2>
      <p className='p'>We do not alter our data collection practices in response to “Do Not Track” signals due to the lack of industry consensus.</p>

      <h2 className='h2'>Changes</h2>
      <p className='p'>We may update this Privacy Policy to reflect changes in our practices or for legal reasons. Please review it periodically.</p>

      <h2 className='h2'>Complaints</h2>
      <p className='p'>If you have any complaints, please contact us at the details provided above. If you are not satisfied with our response, you can lodge your complaint with the relevant data protection authority.</p>

    </div>
  );
};

export default PrivacyPolicy;
