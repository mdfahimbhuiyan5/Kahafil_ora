import React from 'react';

const educationData = [
    {
        year: '2019',
        degree: 'Bachelor Of Science',
        institution: 'Daffodil International University'
    },
    {
        year: '2014',
        degree: 'Higher School Certificate',
        institution: 'Daffodil International School'
    },
    {
        year: '2012',
        degree: 'Secondary School Certificate',
        institution: 'Daffodil International School'
    },
];

const certificationsData = [
    {
        year: '2001',
        name: 'Microsoft Certified Architect',
        issuer: 'Microsoft'
    },
    {
        year: '2001',
        name: 'Microsoft Certified Architect',
        issuer: 'Microsoft'
    },
    {
        year: '2001',
        name: 'Microsoft Certified Architect',
        issuer: 'Microsoft'
    },
    {
        year: '2001',
        name: 'Microsoft Certified Architect',
        issuer: 'Microsoft'
    },
    {
        year: '2001',
        name: 'Microsoft Certified Architect',
        issuer: 'Microsoft'
    },
    {
        year: '2001',
        name: 'Microsoft Certified Architect',
        issuer: 'Microsoft'
    },
];

const EducationCertifications = () => {
    return (
        <section className="bg-[#EFEAE4] py-20 px-8 md:px-20 text-gray-800"> {/* Removed font-amiri from section as specific elements will have their own fonts */}
            <h2
                className="text-center text-gray-900 mb-16"
                style={{
                    fontFamily: 'Amiri, serif',
                    fontWeight: 400,
                    fontSize: '60px',
                    lineHeight: '100%',
                    letterSpacing: '0em', // 0% letter-spacing
                    textTransform: 'capitalize',
                }}
            >
                Education & Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 max-w-6xl mx-auto">
                {/* Education Column */}
                <div className="col-span-1 flex flex-col space-y-8">
                    {educationData.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <p
                                className="text-gray-500 mb-1"
                                style={{
                                    fontFamily: "'Fragment Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '22px',
                                    lineHeight: '100%',
                                    letterSpacing: '0em', // 0% letter-spacing
                                    textTransform: 'uppercase',
                                }}
                            >
                                {item.year}
                            </p>
                            <h3
                                className="text-gray-900 mb-1"
                                style={{
                                    fontFamily: 'Amiri, serif',
                                    fontWeight: 400,
                                    fontSize: '30px',
                                    lineHeight: '200%',
                                    letterSpacing: '0.02em', // 2% letter-spacing
                                    textTransform: 'capitalize',
                                }}
                            >
                                {item.degree}
                            </h3>
                            <p
                                className="text-gray-700"
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 300,
                                    fontSize: '20px',
                                    lineHeight: '200%',
                                    letterSpacing: '0.02em', // 2% letter-spacing
                                    textTransform: 'capitalize',
                                }}
                            >
                                {item.institution}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Certifications Columns */}
                <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
                    {certificationsData.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <p
                                className="text-gray-500 mb-1"
                                style={{
                                    fontFamily: "'Fragment Mono', monospace",
                                    fontWeight: 400,
                                    fontSize: '22px',
                                    lineHeight: '100%',
                                    letterSpacing: '0em', // 0% letter-spacing
                                    textTransform: 'uppercase',
                                }}
                            >
                                {item.year}
                            </p>
                            <h3
                                className="text-gray-900 mb-1"
                                style={{
                                    fontFamily: 'Amiri, serif',
                                    fontWeight: 400,
                                    fontSize: '30px',
                                    lineHeight: '200%',
                                    letterSpacing: '0.02em', // 2% letter-spacing
                                    textTransform: 'capitalize',
                                }}
                            >
                                {item.name}
                            </h3>
                            <p
                                className="text-gray-700"
                                style={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 300,
                                    fontSize: '20px',
                                    lineHeight: '200%',
                                    letterSpacing: '0.02em', // 2% letter-spacing
                                    textTransform: 'capitalize',
                                }}
                            >
                                {item.issuer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationCertifications;
