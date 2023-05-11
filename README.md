# Verifiable Credentials as CSVs

## vc -> json-pointer.dict -> csv

### application/vc+ld+json

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "type": [
    "VerifiableCredential"
  ],
  "issuer": {
    "id": "did:web:jwt.vc",
    "type": "Organization",
    "name": "Capital Factory",
    "location": {
      "type": "Place",
      "address": {
        "type": "PostalAddress",
        "streetAddress": "701 Brazos St",
        "addressLocality": "Austin",
        "addressRegion": "Texas",
        "postalCode": "78701",
        "addressCountry": "US"
      }
    }
  },
  "validFrom": "2023-05-09T22:25:23.652Z",
  "credentialSubject": {
    "id": "did:web:jwt.vc",
    "type": "Organization",
    "name": "Los Angeles Harbor Department",
    "location": {
      "type": "Place",
      "address": {
        "type": "PostalAddress",
        "streetAddress": "425 S. Palos Verdes St.",
        "addressLocality": "San Pedro",
        "addressRegion": "CA",
        "postalCode": "90731",
        "addressCountry": "US"
      }
    }
  }
}
```



### application/vc+ld+json+csv

```csv
/@context/0,/type/0,/issuer/id,/issuer/type,/issuer/name,/issuer/location/type,/issuer/location/address/type,/issuer/location/address/streetAddress,/issuer/location/address/addressLocality,/issuer/location/address/addressRegion,/issuer/location/address/postalCode,/issuer/location/address/addressCountry,/validFrom,/credentialSubject/id,/credentialSubject/type,/credentialSubject/name,/credentialSubject/location/type,/credentialSubject/location/address/type,/credentialSubject/location/address/streetAddress,/credentialSubject/location/address/addressLocality,/credentialSubject/location/address/addressRegion,/credentialSubject/location/address/postalCode,/credentialSubject/location/address/addressCountry
https://www.w3.org/ns/credentials/v2,VerifiableCredential,did:web:jwt.vc,Organization,Capital Factory,Place,PostalAddress,701 Brazos St,Austin,Texas,78701,US,2023-05-09T22:25:23.652Z,did:web:jwt.vc,Organization,Los Angeles Harbor Department,Place,PostalAddress,425 S. Palos Verdes St.,San Pedro,CA,90731,US
```