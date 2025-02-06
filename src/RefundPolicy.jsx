import React from 'react';
import './RefundPolicy.css'; // Link to the CSS file

const RefundPolicy = () => {
  return (
    <div className="refund-policy-container">
      <h1>Refund Policy</h1>
      <p className='p'>We love our customers and want you to be completely satisfied with your JellyFish Lamp purchase. We understand that shopping online can sometimes be tricky, so we strive to provide top-notch service and a hassle-free shopping experience. If you’re not entirely happy with your purchase, we’re here to help!</p>

      <h2 className='h2'>Return Policy</h2>
      <p className='p'>
        The Ear Bud™ will accept returns or exchanges for items purchased from our website within 30 days of purchase under the following conditions:
      </p>
      <ul>
        <li>The item is in new, unused condition with no visible signs of damage.</li>
        <li>All original packaging is intact and undamaged.</li>
        <li>Any sign of damage will compromise the The Ear Bud™ guarantee.</li>
        <li>Items cannot be returned or exchanged after 30 days from the date of purchase.</li>
      </ul>
      <p className='p'>Certain types of goods are exempt from being returned, including but not limited to intimate or sanitary items, hazardous materials, flammable liquids, and gases.</p>
      <p className='p'>To complete your return, you may need to provide a receipt or proof of purchase (such as your order confirmation email) with your order number.</p>
      <p className='p'>For all returns or exchanges, please contact us at <a href="mailto:official.ear.bud@gmail.com">official.ear.bud@gmail.com</a> with your order number and the reason for the return or exchange. Our team will review your request and assist you based on the conditions outlined in this policy.</p>

      <h2 className='h2'>Exchanges (if applicable)</h2>
      <p className='p'>If you would like to exchange an item, please contact <a href="mailto:official.ear.bud@gmail.com">official.ear.bud@gmail.com</a> with your order number and the reason for your exchange. We will process your exchange request according to our return policy.</p>

      <h2 className='h2'>Return Shipping (if applicable)</h2>
      <p className='p'>You will be responsible for the return shipping costs. If you are returning an item valued over $75, we recommend using a trackable shipping service or purchasing shipping insurance. We cannot guarantee that we will receive your returned item without these precautions.</p>

      <h2 className='h2'>Refunds (if applicable)</h2>
      <p className='p'>Once we receive and inspect your returned item, we will notify you via email about the approval or rejection of your refund. If approved, your refund will be processed, and a credit will be applied automatically to your original payment method.</p>

      <h2 className='h2'>Late or Missing Refunds (if applicable)</h2>
      <p className='p'>It’s normal for financial institutions to take 2-3 business days to process refunds. If you haven’t received your refund after this period, please email us at <a href="mailto:official.ear.bud@gmail.com">official.ear.bud@gmail.com</a>, and we’ll investigate the issue further.</p>

      <h2 className='h2'>Gifts</h2>
      <p className='p'>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, we will send you a digital gift certificate for the return value.</p>

      <h2 className='h2'>Damaged Items</h2>
      <p className='p'>If you receive a damaged or defective JellyFish Lamp, please contact us at <a href="mailto:official.ear.bud@gmail.com">official.ear.bud@gmail.com</a> within 48 hours of receiving your order. Our team will review your claim based on the timestamp and tracking information provided by the carrier. Claims made after 48 hours may not be honored.</p>

      <h2 className='h2'>Feedback</h2>
      <p className='p'>We appreciate your feedback, questions, or concerns! Please don’t hesitate to email us at <a href="mailto:official.ear.bud@gmail.com">official.ear.bud@gmail.com</a> with any comments. We take your input seriously and are committed to continually improving our service and products.</p>
    </div>
  );
};

export default RefundPolicy;
