import { Component } from "react";

export default class Cards extends Component{
    state = {
        imagens: [
            {img: 'https://s3-alpha-sig.figma.com/img/a266/54a7/1472f8dc7d5149a1fd409a3048dcb7d5?Expires=1679270400&Signature=aWDE~kQAKNnXxnB~bTPf6fTWZ6ZAl~-egxRpCeEozaiOnyiMH~6UdiG2p8cOsVTddyi3EUhA8-mfWMFaqVuN4QIHyVpgpAVxpbx9QH-LzzhZbMJjJ06~0aaKTVzJlhjAFQX98tXmuE5XLVtaBZGRUnWWIEE3ynm2eOKU3jW-NkUXw0V3FzIFj~7NG6CSQrZ-33-KWXlTtgh-BgY4-UPC16vGKTabyBhT3YEJLx-fjwI22B6mPN-VrDtsdSmn0BR0Oz3CqCasURkCCKMpILJ-2kmeFLDsr8fB0AInUdx9TTrik3SNhkH9KU-DYgq8lh-MeLFet8NtzUipD6fDWSeehg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
            {img:'https://s3-alpha-sig.figma.com/img/571a/0c88/1f40edbb241bafa2fa318651f0a481de?Expires=1679270400&Signature=GHhfmffvYu8eQaCEv0dT3OgN1YsCHAccfdjzKdpHutWnls0cS7GZ8WWOWlRv5HzAxCPbp7PBu6hEh2R3nuL2idkU7nmEFGuJKEAwp6uY15ZhSQPsOf61BQUEMUTCMc7VPbb4wimRD9uB9y4mbDHsp8EcVGi4gva5JZL1JhdxTpI0PGJJ2cctLndxUEVyMjcuh4txMwvrVH23Cm3I-S9K8Zv9kNojCLdtS4OW-IUozHP1xwi38FM~eE0dIyXtVYJelNXUBmRuog0ZI-oaraV0MdKj5ItinicCUytshw3IgWGWW1~f-zzr5V~sp5j9-6dQwtQSCrEoGZCWsEHu~chIuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
            {img:'https://s3-alpha-sig.figma.com/img/2209/62ef/1ed832ee2d4bfa891ca9b84f326433d8?Expires=1679270400&Signature=JKeON0XF0sg~3XYoBVBoIJJKK~BLqFFpLEmUc3UyCL8Mpb6gfp72CaoPK-Ue3~qM0o~XICqVYpwkZFm0PbYCvRJWJycXn-UgNIxNNNN8SILh72N3m-eX2EFs2c-uHzGL7rLbbfJYvHx7igCaYbJAG-lnYXY~pu-ihWUuROz29REIaAUjDPTzfmoaD~mNSKazAohiuKU6X4tmiPeLUu6Xa3YfM~t~OmIlnGzoa3NedDb7Dqs0lh0gCGtGNCAc49Ik1n~TJ6FfkfkrJuT4j3kB9~1HCSbykofclSGQrSZ4zH09NAdnm3aBZT91oKq5NIzWsiZQ2G-LZoUYiRTcpBBvHQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
            {img:'https://s3-alpha-sig.figma.com/img/6a47/44c6/99ab5bc00d689be76a75f467bf4c8d49?Expires=1679270400&Signature=RuWYUBIpUuENzY6d3GOMVqRdRkrnMw1yLnBZ-m8a7k-F8KmpXfe66VmfvvaWw02sYokswfP0-ftY4v6a9VhUTZvcC7YB0ooAvWCr2oFsyFnDu6nywMqnlES4ZbYGTXtGXE7FgpjyJyV~IdzN0FKOpsoOSx9fMYNh8V7pBsUHVgbz6CqJt2LDMYdoNZ1Qh1WQwYTaTOF-eznOhO36Qn20o4OdKC3kYjZ5d3MBa-ultS1rTGBP7oG4tFtBq8m60pEFZHUW-~myAHhtz9YmYtxgzNwaZ3A1Ms47xDD0YqguUcV5Yfamo45I1imOyAY8cnLjA8KqQdVTcedVgHpQV8Hd~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
            {img:'https://s3-alpha-sig.figma.com/img/8a6b/4f81/24b5bd7e0c624a1522f7647ce13c5ed0?Expires=1679270400&Signature=OlyLBplNXlHe2Gi8QX8dBhy7VNd307vJzCyBQ6GkQXbVEt6Yv2Zh2F3l6mbkDOnf-mkPa7EoDbD15D0jtcZxn8~Y5erBT8Q8qpqx8Y-nlAMKbugivmbEqP-E82L-hLgCEAnU1-jTw9CocoTEyHrS1yrkoELgbM6H3C74YmnRy2XV77bWLHmiPmx1jnnVCaTEfGQhJWU~42fbt42DFTNobPWQNLqT8CHOvr0abhnnsg40GLznXV904XxOwtPA7hze-kCqrvh3-52Y0oLnBC0JwhOaD2rndv2y9z2teqk5gDeMNqhyxy4N1DY8HG2Z9VsgsngcY2KCqsGn7PsnUmZ9hw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
            {img:'https://s3-alpha-sig.figma.com/img/a143/4960/b6820744c5e12cbd078a8ab86cf209f4?Expires=1679270400&Signature=a0xvwCzXfgzIBUv~an4JpGIleKG2nOHMKptMIpEd1KPNG7VMhnXX3kI5Wq5~2ksN9sNAOXlMEVVqs2vSsQ9EWCoNIlAf-WYKomjLgFmXmLE3V~qFzNCNS52c3XxG1rMsjOSPuWkw~hp0BltnebfmAYQFw4nbaMMqN0JyaVOxoETeTQDF1lAsRaNTJsiOsoQ6a6Ik3qCS0hhV2Jan24uTeZg4u1l~qlxmrjqnxMy25RcaGK0oPTdYKWx07w~D33F9yTGSrVaLHk1J1xggWtIjKvRF00dJU5SGCqNmi66ddc-bkaXWFT9almPiobXb7ee43Tl5k3HbRM-OI1XAWnuBvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
            {img:'https://s3-alpha-sig.figma.com/img/20fe/986a/db5d0df313cc370b5c91706d16458129?Expires=1679270400&Signature=P78yygm8pO6e00PWfL~2ZVHyVP4fAb3dXmViRuHprE61fNUiVrfM4KrM2088OtO2-EQl3lHTq9Z9ucupQ6TN9QOtWlFx41B~xN31tFvLNZatc-hpIaDQwYx~G7rpBDCe8wWaa3pQRlaw5IJlA9zJ3d3GYHGZoPlHFqq5BKqP~XTiL8L2tu2t9Ni36RB19jJZr~gWvFQ5iFLGbSjjF7HpEeFqQs1oS4VqZReA1ud9lgghYSqCtieNod9NY41p6ijoEcFWZKVMbuub~cR1-DThlgTKkmit~eVVYNdWkXH~-NfgAS~Yhzr9XSOOY~N8hzrYcrEK6LTiKBfdp3fAzePQUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'},
            {img:'https://s3-alpha-sig.figma.com/img/70a5/7c98/082ad83eb1c82169ee159824213b5e19?Expires=1679270400&Signature=mDcPPwM9ftmsf5kyxoJTYrRAg10GoPP5vPYD39tdKGnOeaHi8WS9t-G~EJTchSgC9uej7VnddjuKneZ3ycCttqRAr9tQ0hO6~VEcz5ikeZYdep6rCJ1NLPQMVFKwgBgEXIH6q2QPvWmC-1P-MCh4WdpGu1JNeR9Mw0p9n2bTsK1cBMBYqGqYIc6idF60K89zV56UZJo22GbhyHq0Inya9Z7XJHmG006eFArPN5yuQqjp4dq0UAD1WSbg6xJLa8aocjB-Y1PaRZGsJ21HSy-sR4P3Da0L-NanfL306OeaiLLYWt5sjHXpIGIKtL2Pf~XIHm4Nad~03-e~fwqRR-lTUg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'}
        ]
    }

    render(){
         return(
        <div className="cards-box">
            {this.state.imagens.map((item) => (
                <img src={item.img} alt=''/>                
            ))}
        </div>
    )
    }
   
}