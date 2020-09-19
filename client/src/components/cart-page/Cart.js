import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// import { VscTrash } from 'react-icons';

export default function Item() {
  // retreive the item Id from URL params
  const { itemId } = useParams();

  // const [item, setItem] = React.useState('');
  // //create useState to show company name in item card
  // const [company, setCompany] = React.useState('');

  // // calling backend API to get specif item for the card
  // React.useEffect(() => {
  //   fetch(`/api/item/${itemId}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setItem(json);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  // let companyIdOfItem = item.companyId;

  // // calling backend API to GET specific company name
  // React.useEffect(() => {
  //   fetch(`/api/seller/${companyIdOfItem}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setCompany(json);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }, []);

  return (
    <Wrapper>
      <CartWrapper>
        <CartItemInformationWrapper>
          <ItemWrapper>
            {/* <VscTrash style={{ marginRight: '10px' }}> </VscTrash> */}
            <ItemImage
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTExMWFhUXFxcXFxUYFxUWFxgYFxcWFhUVFxgYHSggGBolHRcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQFysdHR0rLS0tLS0tLS0tLS0rLS0tLSstKy0tLS0tKy0tLSstLS0rLTctLS0tLS0tLS0rLTctLf/AABEIANEA8QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAABAwIEAgYHBQYEBwEAAAABAAIRAwQFEiExQVEGImFxgZETMqGxwdHwBxSS4fEVI0JSU3IkMzRiNUNzgpOy0hb/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EACERAQEBAQACAwACAwAAAAAAAAABEQISIQMxUTJBBBNx/9oADAMBAAIRAxEAPwBynShOwnQxNPuqYJBqNBG4zCR3qcbW4MNSg1Cnd0j/AM1n4gnvvdD+rT/EE8ReiGU5UpluU2y9oA/5tP8AE1PftKj/AFaf4m/NVIm9aWKKV6NMnFKP9Vn4gi/aVH+qz8TVRJGRFk7Uy3EaJgCqyToOsN+A81ILeaMIkDggGpfYlW9u55ytElANQiyrS2fRokA1Dr/KOHeVaW+A0WASMxHPilaeMUy2c7ZpPgUZtnDdp8l0S3aAIDQ3sGycBCXkeOcNt3EwGkkojQdyPLj9cl0eANhCOBxCPIsc2DUhzV0arZU3alrZ5wFW3fR+m4dXQ+Y8k9PGJDUeT68vmrK/werT1Ikcx8lXFMiciBoJYKHDdII1SgUw5hVg9MpYrcQJRZ1KrUlFe1TYuWUsVe1D0yjoNKzrTEn0xQUeUED0l3zS2jUcDBDHkHkQ0wV1exs2UWNp02hrGgAADl7z2rl+LN/w9b/pv/8AUrrC2rm3WFf9pNtSxG5srosoNoinkqucf3he1riIy9WM288FqMTxy2t6Qr1q1NlIxleXCHSJGWPWka6SuVvwihcYzjfp6LKmS2YWZ2h2V3oGdZs7O0Go1WQp1XutcAHoPvf+si2cerUy1yA05pEAAbjZsJB2TpT06o2+HOv7bJcsDmNGV8CXOAIJAJBE7ESpHTrpWcPsfvYpCoZpjIXZR1z/ADQdu5cbxPCH0MJxR9QUqTqt1Qd9yp1Gv+7DO4hrg0kMJDgI00pjbYdB+27/AIJ/3UEB0OtdsZTNWo5rGBuZznEBrREkknQBQcD6R2l5m+7V6dXJ6wadWzMEg6wYOu2ixX26vIwaAd6lEHtGpg+IB8FFsMMo2vSWlTt6TKTHYfLm02hjSc7hJA3PVb5IDqVai14LXNDmkQWkAgg7gg7hcvtmZc7R6rKtam3WerTrVGMEnchrQNV1RYPAcHNR1V7tGfeLrvP+Jqpy4D+C4N6TrPnL2cVqra2ZTENAHhqhTaGiBsEC5Kg8CkFJZUCXOnagEygCgQkRqlT07mQBTZCcCJAVKBKSXpD6iAde0EQRIWaxrAR1nsMcSPktCx6USnKbm7mxpxSQtNj2ECDUYNTuPLZZmoCOauZU4XCjVdFIaZTNcIAAymK1NJpuIMcFIciwSqyq1NKbWpqI9sLHrl083SZQQQUrXeJ0y6jVaBJNN4A5ktIAXTLG7ZWY2pTcHMcAQRsQfj2LnqYdhtFxLjRplx1JLGkntJjVdFmuKVpLfoZlvb+79NP3yk2nkyR6OGBhdmzdbadgqN32Vj7laW7Lt9O5s3VHUbpjMpHpahqOaaefUagetw5EgwKmHUf6NP8AA35JP7Mo/wBGn+BvyS8Rq6w37Lbdlnc21arUrVLpwqVrgw15qNJcxzRJiHFx1JkudOhgCz+zuo6zr2d9f1bunU9H6NxZkdRNOSHNJc4uk5dCdm9qpv2bR/o0/wADfknbWl6CoKtu1rKjdNBDXgxNN8bgxvuCARyJ4jVrbfZ5UfZVrO+vql21+Q03lmV1EsmC0lzi7hudh2p3oZ9n5tLg3dxeVby49H6Jj3gtDKYjSC5xJ03nidJMrUYJi7LqnnbIcDlfTMZmO4td7wdiCCFmukmAU3X1Oo6m1za7cpJa0/vKQJA14upz/wCFSbZ1arWtLnENaASXEgAAbkk7BU3R8/uA7UB761QAiDlq1qlRhIIkEtc0+Kbo4BaNgi1oyIIPomEgjUESND2qbXrcSgF1asKE+9WG6V9OWU3mjTd+8IIBJhgPJx4d+yHRO+u7gkVqRYInMdweLXA9ux2I1S3TxvqFwSpmcN1Jjs4qmqV6dCmXudAaOs47+Hb2LnHSP7QnmW0Bkbr1z65HMfy+GqNOR1C9xulT9d7G8es4A+AVW/pnZtOtZuvIOPwXDamIlzpc4kk6nc+aebWbE+cpe1ziV2o9NrU7Vh4tcB5kK0ssdY8dVwcOw+/9AuBUrsHSeOnjH5pylelhzMfB743Eju3CJKLzz+vQrq7XatPwUV9eCuZdHOnD2wK3XZMZgOsNdyP4hougOc2tTFSk4OBGmuhRtRmLGncT9fBTGFcyvemb7Wtkq03NHAgZuO55fBbPCcabXGhE8tJHGCOB7EC7F33rJY/YZSXNBjnHv0WrY6VHxK3zsI98mPAKp6pMBJS3iQk3DC1xB80dNyupRnt10S2FLqMjvTQEIwxOaolZqmuTNRinqel8dZULKgn8qCy8W/kvQjqGAgAmaztV0uI24pbU2d0sGEGMoidEEbKZcQAJPZqgCoVqlGoK1GPSAQWn1ajJn0b47yQ7dpPEEg7G5ri8tS+iCKrCHtY7quZWpw8U3/yz6pI3a+RIIKqLPDQzrPgnlwVlUt3NIr0Y9IAA5p0bVYNcjjwcJOV/A9hIWXlLfS8yJVtfNqU21GmWvaHNnQwRI8exZ/pjihoUHOAJJ0AHM6BSsEqtdUrU2SGlxqsBBBaKjj6Wk/k9lUVJA2FSnwibKvbMJlzR1dp5pUpmuMdHejFxc1TWfRcyTOZ4gbzxBkldbsrVtFgaN+JO5/JSHVOxVuJYgGNJKPqKzb6c7+0fHXPqmkDDKRiObuLjz5DxXN7m5JJWh6TvzVHOnVzifPVZp1ON1nK38M9JVtJGu4+KFOvEj2JNBpALiombVWi5LkWVOpOiRiFc7DeNe7gotF5DgVIvaBnNuEHPZNjeuB3jmum/ZnjhFYUnHqVJgcnjUH3rlTKJLuqFruiNTJVa4n1SDCm9ZVz49jteM4Wy4YQRDoMOESDwiVy/ARUw2+NKpIpvBLZcC4nM0Zjx1l2p3iV1Gwu2vaCE1jOCUrpsPHcRprwJjeFV9sZ69Vb2teQCpGeeKrrOgabGgnYAeQUgOnsTZsv0htYfp4/XBVlJ3Lz+SvukrOqNPH5rNNOq059lT9VNkJ6ZCaKYIqIBqMhAOQCciCVmRpZD8k8u3KitTlR2iRSCpIgllJaABxRl/wBboA6ckgAa8Fe2QbSEcSq7DGy4k7DYJGJV+Ry/XYsfku1fK1+8l7gJjXw84V206cPAhZbo2C55Jh3KQR5GFqXM/wBrfM/JLmCq+vhLfvFK6aSyo0OY8R1atN4Eg8MwLKZDt+pB0iHL64kpVXQaCO5zgqm4qEKhD1SvAWYx24zNIlTb66MLPX9UgGdtZOo9ynppxfbF4nQadDx2UKpRptEwCrfFKQcJ17/kstcuImd+Xdopi+urB311Og0HJQHFB5KJh4K4wtLY8q2w+uD6+wVPKVTqFFPnrK0FSgw+q6N59imYMyHZQdJ1PfsPzVDbEuMDsPuC1OCNbG8++eeuxU1tOrXSejlz1QOWi09OqCsPhhMAjTWVpba5TjPr7aC0EyD79/mjdSIKrbeuZBGnmfYFZOZI1LncdAAPIlNCBiVMOBYeI7N1jrq3yOh3atlfsAiWkdpIJ9hKrsTss7dNxsfge/mpnXjVePlFDRI0Sas6pNIniNu4H2J6q0d08/mt7WaKjASnshG1qATCCcyokFpVd2qDUgO1lLlMFcEQfrsgEAeSCOtquaCJiUyAd3a+Y9g+aLilOdCi8Sn5Yvej+X8tle1SI4LO4CBmmFeV3iPjw+u5KzD+0e5cIVRcVVNuH/WypL54GqRot/WEbjTnwWcv7kTqZ1nb3JWKYiJyt1+t1R167pPE8dCPZuVOtOZSrh3kDPDyVPd2uYnmeKmuqOn3pMSJgqWuy+mZvKOXQbhR6Q3BC0F5Sadhqqeo0BVKy65hhrdVJt7bMZjRNMYS7QaK6tabRw15ItHPMC3pgRpEclaW1y0HUb8lCidhvpx3TtJh5a7JLarDMS4awI+itTh1+06nTvXObJjt2t7Ndu5W+HXrmmeRAcN4O0jsTlR1HT7aqCrOjWO26yuFV5AIK0dnVA1Onbw/LxVM0bpKSKYcNCCNCQPbMKJh95LYcY7ZB9oS+lrs1MNaRO8GNe6dllsMvgx8HxWfXqr5SsVpBtYxsdZ580oHRR8Xuml7ePV1I3127E9QOnP69i25/ijr+RDkdIhHUGiRTCqRNSMqCTCNGIR2pcRv5JDCEpx4JqAuRByE8kkuTBbUcSUTRKBInkO3ie7mkSzwow/QT2zHsV9VJPePIfXNUGEvl0aDkBP14q9ngo6VEGuYWZx6tAK092stj1GWkDkoqoxFdxLifE93D4+SusPyVHtMA6t18DoqSo4ipH1p+qcoPyuD2nXTThoZjsWXTr+PnZ6+28sbGn6R4LGmQNwDzUunglAvdNJndEKiwbG2vuC2C05AROxgmQO6QtFZYi1znEODutBIM6jcd6yynYh//l7Z1Qh1FsDhqO/ZLuOgVnlzCgPxOie6Vbtrgvce336/FWArDIRz98pS39Lr/jMYd0MtMgPoBtJ1dp7Ul/Rm3bUblpNjxPbxWkZU6oHAe3t8lGq1g1zSefn2I2/p77Vr8MpB7IptGvBoUe4tGGqIa3QOOwHJFimM06Lmue8DWOZ74Gsdqo8Wx794x1Ite2DmM6QdoI3KeHObfo3jldrWOa2Mxdp4EEqio9WoBM5gNf7p+IKTdXsuLtJO/ek2RNRzI1OnlOYewrXhPy5Jn9tz0bnKJW0tdveDxWbwC0gBaGvUDRK1jlqpxqo3NlmB2HQeE+xUVxSEyQDyKl3VXM4k+0Jtro0Oo+tlpOUW/iluzrKnYdX2IOo+vFN4nQjXcc1FsKsE96r0m+l9UE6jy4eCZp6JxkEApuo+Akqh6ZBQ8/ajQnUhjPmjjglNECfrRByoyCkNGqPsRGdgf1RSLJ8h9eaQDxPgEY3QbKRl0ahBnX64LSYdcF7S7kYO2/gsu/WOQW3wGzAtmyPW14T3+Sno4rbjVV95by1W97b5T2KBcvWZsHjOCkPztG+6oLmi5rp1H1quk1I4qtvsHa/WAps1rz3jF0L9swRtxU+gGgfuyWf2kt9yfuMBIcSB7ffxKi1LFzYAGvu13Ki/Hv06uP8AI/VnYXlahOQtcHanNO/OZVi3pJXykODQYOoa4938RVBSNRo3E8iJngI8Y80/Qvdw5msA6H65qfCtb8vxdLl2OVWsAZUDoAAzUzmOnEyAqy/uqtcD0lQQNcsCPZ80TqjHCMruzgNddfb5KPUt3OBDRzj4D2I/10T5PjntCLaVPrese3XVQ61dzteBVnSwCo4anXujzV1adHAN9R7+Yj62Vzhj38/4zNlhbqmgaTPh9FbPAejzaQl2rla2ls1gAAUtuhVOTrrU20gdmyhYve6Bon65pqviAAOU9k8lWPqHU/XL5LTmIDPPfHmgEgOGnelzOq0SJ5kZTMH2dyonSypB/I8irt4kKsxJkjNxE+PEjvO/g5P6Jb2VSWpi5couC3Q48FMu3AhFEQcyCCClS0B0SXFKaNEVRp0VCksbxRP08UscExcFGENhCPZNMKcaJSBdCmXOA5ldJtKWVgHAALA4MyazI5/NdE2Cjr7G+lZcNzEzqqa9tolXlUTqoVZsqTZqtRhR/SkFXN3SVXVoKbKrROhwUSvag8PYngwjmpAYeCZqetYgwI4jXbY/qoLrIEzlg6E93Wj4+xaR9umTbJHqio2mrXciJHPSp/8AQ8lYULXLw4k/H5qUaI5JxrDyQWksEfXvTtN/6pbLRx4KczD3NaXRsJhMGM2UE+Kr6+JZ9G7fmoeI3JdMdveoFu6D4K+eUWrRrkod/P8AJMUqkhPaKwDUtp1SO5K1lOEchQ7ml9do2+Xipczr4JD2yEBn7cZHkCY3HcdQrQVZhN3NprPekU9EDDsIIZkaWGsma6IPRUt0b3JghpUK7qaqS10zCYc2NTqeASBduwp/sUZgJMnw5BOufojSWnR7/UM02n3LeuOi5vhVfLVYf9w9q6DVccsqL9i/RNI7qNcNTtoZCXVYpNT1oUStlUu+o8lQXVYskoES3MHJJp67KDh93n3KlU3dZw4SCPikZ11NJ9DCD7kN3IVRfYxuG+aeBZPqNGietQSVmrW6l0ErQ4fVLSEsC1t7YuI1iOCtqjBlI4EFQ7I696saY0QccyuaUEjtIUFzY9qvsdt8ld4IiSSO48VVupyNFrL6TYYt60GFZMdKqK1Mgypdu9Mk0ozv+iMIz9ap6BgoyEn5pSDNVzIUFS6zlGIQBSgjyIICcx8J55Ea69gUaU7TdHekYiOeg5IQOASonihUIA5IIy8wkRzRNdKcj6hIYVZHrtj+Ya8dwul3AAZyWL6JWPpa2c6MpwdOLv4R8fJabEbw7SptFh3D3zO25Up7QqrAq0udrxVzUCklTfBY7pC/JTcRvt5rZXrZlYXpY46N4ak/BOQVnbTEHUzopFPHXNJPNQKrEwWqsPUy7xNzyTO6j/eCeKjkcEtoSNJpVCCtZhd0HgTusYHwrbBroB0OMcilhWOh4c+Ve0DoszhTzI5xqtHQ2SErK9OaOrHDiC0ntEEfFZEAhdJ6VWme2fAkth48Dr7CVz0exOKIbVzaOCApa6HwSwweKcFHhP1zVwrDrdglNcfmolcub8jqEuhdNMTofYmWJYKbrVISHVYkKM98oGF5kqEgJwFAFCCNEmEgIIBNlIzuaE1WfP1skPcjohA05btSamr2jaXNE95ASqtWNGpsUzupodJextJmVugGgH6cVmcQvw1pe4gdnZwVPWxWuRBqaAbQJ4azz+ahGiCQ5xLjA3MgRxDdgY4qcDQdCLl769QmQ1zeq09hBmOC3DgsD0Sq/wCJHa1wHv1XQTsizE1V3QWF6Xt1Ye/4LoF0AsJ0yAytPIlEGMpUCZLUbnzzSw33KyxHySZSxTT7AU42mgIT2EhNNcWmVZOppmpbAosNp+iWLFzyH7wIOnCfyXQbJ64nbPfQqB7dYIkcxxXUcAxinXZmY6dYPAzyUWD+2peARBGhXOMb6P1KD3FjS6nuCNYHI93Nblt4g+oXA8uKmVpjmDTtHknWmVIxqw9BXLQeoes3+0nbwMhRSCNtfBaRJ8tnQqDWtwDPipRqabqLUdKYILijaiDUWdMHMycppgORmpCAkyOaCh+kQQFiCkuKIFJcUgGVERCIuQDkaC6e6ed7FGlG+r2o0iap3RsdCbe/VBphSa86Hgm6EbZHZu79YXQydFjehbAGPfxc6PAD3SVfVrwhwZxMxvwElTaMPXIWD6dthjTP8ceYK11a7jdY7p3Umk3+8e4pSjGRYZ7lJpsTdvT0UpjfBawiA3zS2sSiAlhqZAW8E41nDsQBSygEtpj5p2zBpPLqZyniOB5SiYlSlTaGh0iIaM1MngYjlvqpVn0np+o6d8skGDqRM8jErLtfpHtKSXKPFWpOLXTq1TO7QRAHIBMZ0gvRKpMFozqkmEopBCZGyU27ROuKjuQAzInORFIcUAvMgmsyCAtwjKCCAaKQgglQWkHdEgkCXbHv+KdG57vgiQTNquhfqv8A7vg1W1z/AJ7P7Xe8IILOmj4lt4/FY7ppsz+74FBBE+z/AKVNtsO8+9Ofn7ijQWiDlP1T4JTOHcggqIpHzQQQCgj+fyQQQYFEESCQKCUgggCKJBBAMVE05BBAJcmygggEIIIJm//Z"
              alt="Item image."
            ></ItemImage>
            <ItemInformationWrapper>
              <ItemName>Item name</ItemName>
              <ItemPrice>$</ItemPrice>
              <ItemSelected>Quantity selected</ItemSelected>
              <DeleteItemSelected
              //Onclick on button to delete
              // onClick={() => {
              //   window.location.href = ;
              // }}
              >
                Delete
              </DeleteItemSelected>
            </ItemInformationWrapper>
          </ItemWrapper>
          <DeleteItemSelected
            //Onclick on button to redirect to the cart page
            onClick={() => {
              window.location.href = '/OrderConfirmation/';
            }}
          >
            Purchase
          </DeleteItemSelected>
        </CartItemInformationWrapper>
      </CartWrapper>
    </Wrapper>
  );
}

//components for style
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-top: 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

const CartItemInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2%;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin-left: 5%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
`;

const ItemInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2%;
`;

//stylling selected item card

const ItemImage = styled.img`
  width: 15%;
  height: 15%;
  margin: 2%;
`;

const ItemName = styled.h2`
  flex: 2;
  margin: 2%;
`;

const ItemPrice = styled.h3`
  flex: 2;
  margin: 2%;
`;

const ItemSelected = styled.p`
  flex: 2;
  margin: 2%;
`;

const DeleteItemSelected = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5%;
  margin-bottom: 5%;
  cursor: pointer;
`;

//stylling item in card

const PurchaseButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5%;
  margin-top: 50%;
  cursor: pointer;
`;
