import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className='text-justify'>
            <p>
                This privacy policy applies to the RashIO app (hereby referred to as "Application") for mobile devices
                that was created by RashIO (hereby referred to as "Service Provider") as a Free service. This service is
                intended for use "AS IS".
            </p>

            <h2 className='font-bold mt-2'>Information Collection and Use</h2>
            <p>
                The Application collects information when you download and use it. This information may include
                information such as:
            </p>
            <ul className='list-disc'>
                <li>Your device's Internet Protocol address (e.g. IP address)</li>
                <li>
                    The pages of the Application that you visit, the time and date of your visit, the time spent on
                    those pages
                </li>
                <li>The time spent on the Application</li>
                <li>The operating system you use on your mobile device</li>
            </ul>
            <p>The Application does gather precise information about the location of your mobile device.</p>
            <p>
                The Application collects your device's location, which helps the Service Provider determine your
                approximate geographical location and make use of in below ways:
            </p>
            <ul className='list-disc mb-2'>
                <li>
                    <strong>Geolocation Services:</strong> The Service Provider utilizes location data to provide
                    features such as personalized content, relevant recommendations, and location-based services.
                </li>
                <li>
                    <strong>Analytics and Improvements:</strong> Aggregated and anonymized location data helps the
                    Service Provider to analyze user behavior, identify trends, and improve the overall performance and
                    functionality of the Application.
                </li>
                <li>
                    <strong>Third-Party Services:</strong> Periodically, the Service Provider may transmit anonymized
                    location data to external services. These services assist them in enhancing the Application and
                    optimizing their offerings.
                </li>
            </ul>
            <p>
                The Service Provider may use the information you provided to contact you from time to time to provide
                you with important information, required notices and marketing promotions.
            </p>
            <p>
                For a better experience, while using the Application, the Service Provider may require you to provide us
                with certain personally identifiable information, including but not limited to Email, Phone Number,
                Password, Name, Image. The information that the Service Provider request will be retained by them and
                used as described in this privacy policy.
            </p>

            <h2 className='font-bold mt-2'>Third Party Access</h2>
            <p>
                Only aggregated, anonymized data is periodically transmitted to external services to aid the Service
                Provider in improving the Application and their service. The Service Provider may share your information
                with third parties in the ways that are described in this privacy statement.
            </p>
            <p>
                Please note that the Application utilizes third-party services that have their own Privacy Policy about
                handling data. Below are the links to the Privacy Policy of the third-party service providers used by
                the Application:
            </p>
            <ul className='list-disc mb-2'>
                <li>
                    <a
                        href='https://www.google.com/policies/privacy/'
                        className='link link-hover text-blue-600 visited:text-purple-600'>
                        Google Play Services
                    </a>
                </li>
            </ul>
            <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
            <ul className='list-disc'>
                <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                <li>
                    when they believe in good faith that disclosure is necessary to protect their rights, protect your
                    safety or the safety of others, investigate fraud, or respond to a government request;
                </li>
                <li>
                    with their trusted services providers who work on their behalf, do not have an independent use of
                    the information we disclose to them, and have agreed to adhere to the rules set forth in this
                    privacy statement.
                </li>
            </ul>

            <h2 className='font-bold mt-2'>Opt-Out Rights</h2>
            <p>
                You can stop all collection of information by the Application easily by uninstalling it. You may use the
                standard uninstall processes as may be available as part of your mobile device or via the mobile
                application marketplace or network.
            </p>

            <h2 className='font-bold mt-2'>Data Retention Policy</h2>
            <p>
                The Service Provider will retain User Provided data for as long as you use the Application and for a
                reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via
                the Application, please contact them at{' '}
                <a
                    className='link link-hover text-blue-600 visited:text-purple-600'
                    href='mailto:id.rashio.dev@gmail.com'>
                    id.rashio.dev@gmail.com
                </a>{' '}
                and they will respond in a reasonable time.
            </p>

            <h2 className='font-bold mt-2'>Children</h2>
            <p>
                The Service Provider does not use the Application to knowingly solicit data from or market to children
                under the age of 13.
            </p>
            <p>
                The Application does not address anyone under the age of 13. The Service Provider does not knowingly
                collect personally identifiable information from children under 13 years of age. In the case the Service
                Provider discovers that a child under 13 has provided personal information, the Service Provider will
                immediately delete this from their servers. If you are a parent or guardian and you are aware that your
                child has provided us with personal information, please contact the Service Provider (
                <a
                    className='link link-hover text-blue-600 visited:text-purple-600'
                    href='mailto:id.rashio.dev@gmail.com'>
                    id.rashio.dev@gmail.com
                </a>
                ) so that they will be able to take the necessary actions.
            </p>

            <h2 className='font-bold mt-2'>Security</h2>
            <p>
                The Service Provider is concerned about safeguarding the confidentiality of your information. The
                Service Provider provides physical, electronic, and procedural safeguards to protect information the
                Service Provider processes and maintains.
            </p>

            <h2 className='font-bold mt-2'>Changes</h2>
            <p>
                This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify
                you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are
                advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of
                all changes.
            </p>
            <p>This privacy policy is effective as of 2024-05-23</p>

            <h2 className='font-bold mt-2'>Your Consent</h2>
            <p>
                By using the Application, you are consenting to the processing of your information as set forth in this
                Privacy Policy now and as amended by us.
            </p>

            <h2 className='font-bold mt-2'>Contact Us</h2>
            <p>
                If you have any questions regarding privacy while using the Application, or have questions about the
                practices, please contact the Service Provider via email at{' '}
                <a
                    className='link link-hover text-blue-600 visited:text-purple-600'
                    href='mailto:id.rashio.dev@gmail.com'>
                    id.rashio.dev@gmail.com
                </a>
                .
            </p>

            <p>
                This privacy policy page was generated by{' '}
                <a
                    className='link link-hover text-blue-600 visited:text-purple-600'
                    href='https://app-privacy-policy-generator.nisrulz.com/'>
                    App Privacy Policy Generator
                </a>
            </p>
        </div>
    );
};

export default PrivacyPolicy;
