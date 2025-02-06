import React from "react";
import './ShippingPolicy.css';

const ShippingPolicy = () => {
  return (
    <div className="shipping-policy-container">
      <h1 className="h1">Shipping Policy</h1>

      <section className="section">
        <h2 className="h2">Order Processing and Payment Verification</h2>
        <p className="p">
          You will be charged at the time of placing your order, and all payments are subject to verification and approval before shipping. This may take several days to process. To help prevent credit card fraud, orders with incorrect billing information or requiring additional verification may be delayed or canceled.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">Shipping Process</h2>
        <p className="p">
          We require an average of 2-5 business days to fulfill your order and transport it to our carrier's sort facility. Some items may take longer, especially during major holidays (up to 10 days), or if your order includes popular items experiencing stock availability issues.
        </p>
        <p className="p">
          Once your order is processed through our shipping department, we are unable to make any changes, including address modifications. We will only ship to the address provided at checkout.
        </p>
        <p className="p">
          Please note that we only ship during business days and do not ship on Saturdays, Sundays, or holidays. Once your order has been dispatched, you will receive a shipping confirmation email.
        </p>
        <p className="p">
          For orders containing multiple items, products may be shipped separately and may arrive on different dates due to varying locations of manufacturing partners.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">Tracking</h2>
        <p className="p">
          All orders are processed with tracking numbers. Once your order has been dispatched to the carrier's sort facility, you will receive an email with your tracking number.
        </p>
        <p className="p">
          Please note that it may take several days for tracking information to update in the system. If your order was placed more than 5 business days ago and you still do not see any tracking updates, please contact us for assistance.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">Deliveries</h2>
        <p className="p">
          Shipping times vary by country or region, and specific delivery dates are not guaranteed. Below are the estimated delivery times for your reference:
        </p>
        <ul>
          <li><strong>United States:</strong> 7-14 Business Days</li>
          <li><strong>Canada, Europe:</strong> 10-14 Business Days</li>
          <li><strong>Australia, New Zealand:</strong> 10-21 Business Days</li>
          <li><strong>Mexico, Central America, South America:</strong> 15-30 Business Days</li>
        </ul>
        <p className="p">
          <em>Note:</em> These timeframes are estimates based on business days and do not include our 2-5 day processing time.
        </p>
        <p className="p">
          While we strive to ensure timely delivery, we cannot be held responsible for external conditions such as postal or customs clearance procedures, holidays, severe weather, labor disputes, or protests, which may cause delays beyond our original estimates.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">Duties, Taxes, and Other Fees</h2>
        <p className="p">
          International shipments may be subject to import taxes, duties, and/or customs clearance fees, which are levied once the shipment reaches the recipient's country. These fees are the sole responsibility of the recipient. We have no control over these charges and cannot predict what they may be. If a shipment is refused and returned, you will be responsible for any import taxes and return shipping costs incurred.
        </p>
        <p className="p">
          Customs policies vary by country. For more information, we recommend contacting your local customs office.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">Lost, Stolen, or Damaged Packages</h2>
        <p className="p">
          We are not responsible for lost, stolen, or damaged packages. If your tracking information states that your package was delivered to your address but you have not received it, please report the issue and file a claim with the respective shipping carrier.
        </p>
        <p className="p">
          We rely on timestamp information from the tracking link and the carrier's delivery confirmation when reviewing damage or return requests. We may not be able to honor your claim if the issue is not reported in a timely manner.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">Wrong Address Disclaimer</h2>
        <p className="p">
          It is the responsibility of the buyer to ensure that the shipping address entered is correct before submitting the order. Since we begin processing your order immediately, we are unable to make any changes once the order is placed. If the order has already been processed, we cannot retrieve it for an address change.
        </p>
      </section>

      <section className="section">
        <h2 className="h2">Feedback</h2>
        <p className="p">
          We value your feedback, questions, and concerns. Feel free to email us at <a href="mailto:official.ear.bud@gmail.com">official.ear.bud@gmail.com</a> to share your thoughts. We take your feedback seriously and are continuously striving to improve our services.
        </p>
      </section>
    </div>
  );
};

export default ShippingPolicy;
