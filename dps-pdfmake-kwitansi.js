// try here http://pdfmake.org/playground.html

var dd = {
  margin: 0,
  content: [
    {
      style: "blue",
      fontSize: 25,
      bold: true,
      columns: [
        {
          // Company logo
          text: "PT. DUNIA PRATAMA SEJAHTERA",
          style: "left",
        },
        {
          // Judul
          text: "Kwitansi",
          style: "right",
        },
      ],
    },
    {
      columns: [
        {},
        {
          // Data Invoice
          margin: [0, 10],
          width: "40%",
          layout: "noBorders",
          table: {
            widths: ["*", 1, "auto"],
            body: [
              [
                {
                  text: "Tanggal",
                },
                {
                  text: ":",
                },
                {
                  text: "11/12/2024",
                },
              ],
            ],
          },
        },
      ],
    },
    {
      columns: [
        {
          width: "50%",
          columns: [
            [
              {
                bold: true,
                text: "Informasi Perusahaan",
              },
              {
                margin: [0, 10],
                canvas: [
                  { type: "line", x1: 0, y1: 0, x2: 250, y2: 0, lineWidth: 3 },
                ],
              },
              {
                // Data Pelanggan
                layout: "noBorders",
                table: {
                  headerRows: 1,
                  widths: "*",
                  body: [
                    [
                      {
                        style: ["blue", "bold"],
                        text: "PT. DUNIA PRATAMA SEJAHTERA",
                      },
                    ],
                    [
                      {
                        text: "LINDETEVES TRADE CENTER (LTC) GLODOK LANTAI UG BLOK C3 NO. 6, JL. HAYAM WURUK NO.127 RT 01 RW.06 MANGGA BESAR TAMAN SARI KOTA ADM. JAKARTA BARAT DKI JAKARTA 11180",
                      },
                    ],
                    [
                      {
                        text: "Email: SALES.DUNIAPRATAMA@GMAIL.COM",
                        link: "mailto:SALES.DUNIAPRATAMA@GMAIL.COM",
                      },
                    ],
                  ],
                },
              },
            ],
          ],
        },
        {
          width: "10%",
          text: "",
        },
        {
          width: "40%",
          columns: [
            [
              {
                bold: true,
                text: "Telah Terima Dari",
              },
              {
                margin: [0, 10],
                canvas: [
                  { type: "line", x1: 0, y1: 0, x2: 200, y2: 0, lineWidth: 3 },
                ],
              },
              {
                // Data Invoice
                layout: "noBorders",
                table: {
                  headerRows: 1,
                  widths: "*",
                  body: [
                    [
                      {
                        style: ["blue", "bold"],
                        text: "Squilliam Fancyson III",
                      },
                    ],
                    [
                      {
                        text: "10000 Million Dollar Way\nBikini Bottom, Pacific Ocean\nUnited States of Atlantis",
                      },
                    ],
                  ],
                },
              },
            ],
          ],
        },
      ],
    },
    {
      margin: [50, 35, 0, 35],
      columns: [
        {
          width: "100%",
          layout: "noBorders",
          lineHeight: 2,
          table: {
            body: [
              [
                {
                  text: "Banyaknya Uang",
                },
                {
                  text: ":",
                },
                {
                  text: "Satu Juta Sembilan Ratus Enam Puluh Ribu Rupiah",
                },
              ],
              [
                {
                  text: "Untuk Pembayaran ",
                },
                {
                  text: ":",
                },
                {
                  text: "Terima pembayaran tagihan INV/17/12/24/00191",
                },
              ],
              [
                {
                  text: "Pembayaran Diterima",
                },
                {
                  text: ":",
                },
                {
                  text: "Kas",
                },
              ],
            ],
          },
        },
      ],
    },
    {
      // ttd
      margin: [0, 15, 0, 0],
      layout: "noBorders",
      table: {
        widths: ["20%", "20%", "20%", "40%"],
        // widths: '25%',
        body: [
          [
            {
              style: "center",
              text: "Diperiksa Oleh",
            },
            {
              style: "center",
              text: "Diterima Oleh",
            },
            {
              style: "center",
              text: "Pengirim",
            },
            {
              style: "center",
              text: "Dengan Hormat",
            },
          ],
        ],
      },
    },
    {
      margin: [0, 75, 0, 0],
      layout: "noBorders",
      table: {
        widths: ["20%", "20%", "20%", "40%"],
        // widths: '25%',
        body: [
          [
            {
              style: "center",
              text: "(.............................)",
            },
            {
              style: "center",
              text: "(.............................)",
            },
            {
              style: "center",
              text: "(.............................)",
            },
            {
              style: ["center", "underline"],
              text: "PT. DUNIA PRATAMA SEJAHTERA",
            },
          ],
        ],
      },
    },
    {
      layout: "noBorders",
      table: {
        widths: ["20%", "20%", "20%", "40%"],
        // widths: '25%',
        body: [
          [
            {},
            {},
            {},
            {
              style: "center",
              text: "Finance Dept",
            },
          ],
        ],
      },
    },
  ],
  styles: {
    tableHeader: {
      bold: true,
      fontSize: 13,
      color: "#fff",
      alignment: "center",
      fillColor: "#0A50A5",
    },
    bold: {
      bold: true,
    },
    left: {
      alignment: "left",
    },
    center: {
      alignment: "center",
    },
    right: {
      alignment: "right",
    },
    underline: {
      decoration: "underline",
    },
    blue: {
      color: "#0A50A5",
    },
  },
  defaultStyle: {
    columnGap: 0,
    fontSize: 10,
    lineHeight: 1,
  },
};
