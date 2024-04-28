import React from 'react';
import "./wild.css";

const WildlifeSanctuariesTable = () => {
  return (
    <div className='table-container'>
      <div className="centered-table">
        <h2>WILD LIFE SANCTUARIES</h2>
        <br/>
        <table className="bordered-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Type</th>
              <th>Website</th>
              <th>Contact Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Rows for wildlife sanctuaries and zoos */}
            <tr>
              <td>Ranthambore National Park</td>
              <td>Rajasthan</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.ranthamborenationalpark.com/">Visit Website</a></td>
              <td>Contact: +91-7462-215363</td>
            </tr>
            <tr>
              <td>Bandhavgarh National Park</td>
              <td>Madhya Pradesh</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.bandhavgarhnationalpark.in/">Visit Website</a></td>
              <td>Contact: +91-7627-123456</td>
            </tr>
            <tr>
              <td>Jim Corbett National Park</td>
              <td>Uttarakhand</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.corbettnationalpark.in/">Visit Website</a></td>
              <td>Contact: +91-5947-253977</td>
            </tr>
            {/* Add more rows for other wildlife sanctuaries and zoos */}
            <tr>
              <td>Gir National Park</td>
              <td>Gujarat</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.girnationalpark.org/">Visit Website</a></td>
              <td>Contact: +91-2877-285540</td>
            </tr>
            <tr>
              <td>Kaziranga National Park</td>
              <td>Assam</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.kaziranga-national-park.com/">Visit Website</a></td>
              <td>Contact: +91-3776-262085</td>
            </tr>
            <tr>
              <td>Periyar Wildlife Sanctuary</td>
              <td>Kerala</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.periyartigerreserve.org/">Visit Website</a></td>
              <td>Contact: +91-4869-222027</td>
            </tr>
            <tr>
              <td>Sundarbans National Park</td>
              <td>West Bengal</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.wbsundarbans.org/">Visit Website</a></td>
              <td>Contact: +91-3210-266421</td>
            </tr>
            <tr>
              <td>Bandipur National Park</td>
              <td>Karnataka</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.bandipurnationalpark.com/">Visit Website</a></td>
              <td>Contact: +91-8259-277421</td>
            </tr>
            <tr>
              <td>Tadoba Andhari Tiger Reserve</td>
              <td>Maharashtra</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.tadobatigerkingresort.com/">Visit Website</a></td>
              <td>Contact: +91-9561-131445</td>
            </tr>
            <tr>
              <td>Bharatpur Bird Sanctuary</td>
              <td>Rajasthan</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.keoladeonationalpark.org/">Visit Website</a></td>
              <td>Contact: +91-5644-224834</td>
            </tr>
            <tr>
              <td>Kanha National Park</td>
              <td>Madhya Pradesh</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.kanhanationalpark.com/">Visit Website</a></td>
              <td>Contact: +91-7642-250760</td>
            </tr>
            <tr>
              <td>Pench National Park</td>
              <td>Madhya Pradesh</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.pench-national-park.com/">Visit Website</a></td>
              <td>Contact: +91-7642-250760</td>
            </tr>
            <tr>
              <td>Sanjay Gandhi National Park</td>
              <td>Maharashtra</td>
              <td>Wildlife Sanctuary</td>
              <td><a href="https://www.sgnp.org/">Visit Website</a></td>
              <td>Contact: +91-22-28866449</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WildlifeSanctuariesTable;
