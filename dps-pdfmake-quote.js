// try here http://pdfmake.org/playground.html

var dd = {
  margin: 0,
  content: [
    {
      style: "blue",
      margin: [0, 0, 0, 20],
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
          text: "Penawaran",
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
                  text: "Referensi",
                },
                {
                  text: ":",
                },
                {
                  text: "FCK-SQ/U1/DW/412D",
                },
              ],
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
              [
                {
                  text: "Jatuh Tempo",
                },
                {
                  text: ":",
                },
                {
                  text: "10/01/2025",
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
                text: "Penawaran Kepada",
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
    "\n",
    {
      // Data Produk
      table: {
        headerRows: 1,
        widths: ["auto", "*", "auto", "auto", "auto", "auto", "auto", "auto"],
        body: [
          [
            { text: "No.", style: "tableHeader" },
            { text: "Produk", style: "tableHeader" },
            { text: "Deskripsi", style: "tableHeader" },
            { text: "Kuantitas", style: "tableHeader" },
            { text: "Harga", style: "tableHeader" },
            { text: "Diskon", style: "tableHeader" },
            { text: "Pajak", style: "tableHeader" },
            { text: "Jumlah", style: "tableHeader" },
          ],
          [
            { text: 1, style: "center" },
            { text: 'BALL VALVE SS 304 SANITARY 2"', style: "left" },
            { text: "BALL VALVE", style: "center" },
            { text: 3, style: "center" },
            { text: "500.000", style: "right" },
            { text: "0%", style: "center" },
            { text: "11%", style: "center" },
            { text: "1.500.000", style: "right" },
          ],
          [
            { text: 2, style: "center" },
            { text: 'GASKET SILICONE SANITARY 2"', style: "left" },
            { text: "GASKET", style: "center" },
            { text: 50, style: "center" },
            { text: "8.500", style: "right" },
            { text: "0%", style: "center" },
            { text: "11%", style: "center" },
            { text: "425.000", style: "right" },
          ],
          [
            { text: 3, style: "center" },
            { text: 'CLAMP 304 SINGLE PIN SANITARY 2"', style: "left" },
            { text: "CLAMP", style: "center" },
            { text: 30, style: "center" },
            { text: "34.000", style: "right" },
            { text: "0%", style: "center" },
            { text: "11%", style: "center" },
            { text: "1.020.000", style: "right" },
          ],
          [
            { text: 4, style: "center" },
            { text: 'FERRULE 316 SANITARY 2"', style: "left" },
            { text: "FERRULE", style: "center" },
            { text: 62, style: "center" },
            { text: "22.000", style: "right" },
            { text: "0%", style: "center" },
            { text: "11%", style: "center" },
            { text: "1.364.000", style: "right" },
          ],
        ],
      },
      layout: {
        hLineColor: function (i, node) {
          return i === 0 || i === node.table.body.length
            ? "#0A50A5"
            : "#0A50A5";
        },
        vLineColor: function (i, node) {
          return i === 0 || i === node.table.widths.length
            ? "#0A50A5"
            : "#0A50A5";
        },
      },
    },
    {
      margin: [0, 10, 0, 20],
      columns: [
        {
          // pesan
          width: "70%",
          columns: [
            {
              layout: "noBorders",
              table: {
                body: [
                  [
                    {
                      bold: true,
                      text: "Pesan\n",
                    },
                  ],
                  [
                    {
                      margin: [0, 5],
                      canvas: [
                        {
                          type: "line",
                          x1: 0,
                          y1: 0,
                          x2: 300,
                          y2: 0,
                          lineWidth: 1,
                        },
                      ],
                    },
                  ],
                  [
                    {
                      text: "Pemujaan yang berlebihan itu tak sehat! Ayo, Jeffry",
                    },
                  ],
                ],
              },
            },
          ],
        },
        {
          // Total
          width: "30%",
          columns: [
            {
              layout: "noBorders",
              table: {
                headerRows: 1,
                widths: ["*", 1, "auto"],
                body: [
                  [
                    {
                      bold: true,
                      text: "Subtotal",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "Rp 725.000",
                    },
                  ],
                  [
                    {
                      bold: true,
                      text: "Total",
                    },
                    {
                      text: ":",
                    },
                    {
                      text: "Rp 804.750",
                    },
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    "Terbilang",
    {
      margin: [0, 5],
      canvas: [{ type: "line", x1: 0, y1: 0, x2: 400, y2: 0, lineWidth: 1 }],
    },
    "Empat Juta Tujuh Ratus Delapan Puluh Dua Ribu Sembilan Ratus Sembilan Puluh Rupiah",
    {
      // ttd
      margin: [0, 30, 0, 0],
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
            {},
            {},
            {},
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
