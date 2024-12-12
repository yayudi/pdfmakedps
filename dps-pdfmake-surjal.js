// try here http://pdfmake.org/playground.html

var dd = {
  margin: 0,
  content: [
    {
      // Judul
      text: "Surat Jalan",
      bold: true,
      fontSize: 25,
      style: "center",
      margin: [0, 0, 0, 20],
    },
    {
      columns: [
        {
          width: "63%",
          columns: [
            {
              // Data Pelanggan
              layout: "noBorders",
              table: {
                headerRows: 1,
                widths: ["*", "auto"],
                body: [
                  [
                    {
                      text: "Nama Bisnis",
                    },
                    {
                      text: ": PT. DUNIA PRATAMA SEJAHTERA",
                    },
                  ],
                  [
                    {
                      text: "Alamat Bisnis",
                    },
                    {
                      text: ": LINDETEVES TRADE CENTER (LTC) GLODOK LANTAI UG BLOK C3 NO. 6, JL. HAYAM WURUK NO.127 RT 01 RW.06 MANGGA BESAR TAMAN SARI KOTA ADM. JAKARTA BARAT DKI JAKARTA 11180",
                    },
                  ],
                  [
                    {
                      text: "Nama Pelanggan",
                    },
                    {
                      text: ": PT. MITRACO HOSETAMA",
                    },
                  ],
                  [
                    {
                      text: "Alamat Pelanggan",
                    },
                    {
                      text: ": GEDUNG LINDETEVES TRADE CENTRE LT.SB JL. HAYAM WURUK NO.127 Blok A1 No.6 Kel. MANGGA BESAR, Kec. TAMAN SARI, Kota/Kab. JAKARTA BARAT DKI JAKARTA 11180",
                    },
                  ],
                  [
                    {
                      text: "Telepon",
                    },
                    {
                      text: ": 0812-3456-789",
                    },
                  ],
                ],
              },
            },
          ],
        },
        {
          width: "37%",
          columns: [
            {
              // Data Invoice
              layout: "noBorders",
              table: {
                headerRows: 1,
                widths: ["*", "auto"],
                body: [
                  [
                    {
                      text: "Referensi",
                    },
                    {
                      text: ": INV/DPS/11/12/24/00041",
                    },
                  ],
                  [
                    {
                      text: "Tanggal",
                    },
                    {
                      text: ": 11/12/2024",
                    },
                  ],
                  [
                    {
                      text: "Pemesanan",
                    },
                    {
                      text: ": SO/DPS/11/12/24/00041",
                    },
                  ],
                ],
              },
            },
          ],
        },
      ],
    },
    "\n",
    {
      // Data Produk
      table: {
        headerRows: 1,
        widths: ["auto", "*", "auto", "auto"],
        body: [
          [
            { text: "No.", style: "tableHeader" },
            { text: "Produk", style: "tableHeader" },
            { text: "Kuantitas", style: "tableHeader" },
            { text: "Pajak", style: "tableHeader" },
          ],
          [
            { text: 1, style: "center" },
            { text: 'DN SS304 1/2"', style: "left" },
            { text: 20, style: "center" },
            { text: "pcs", style: "center" },
          ],
          [
            { text: 2, style: "center" },
            { text: 'BALL VALVE SANKYO 1PC 1/2"', style: "left" },
            { text: 12, style: "center" },
            { text: "pcs", style: "center" },
          ],
          [
            { text: 3, style: "center" },
            { text: 'ELBOW LAS SS304 S10 LR 1/2" ', style: "left" },
            { text: 1, style: "center" },
            { text: "pcs", style: "center" },
          ],
          [
            { text: 4, style: "center" },
            { text: 'BALL VALVE SANKYO 3PC 2"', style: "left" },
            { text: 1, style: "center" },
            { text: "pcs", style: "center" },
          ],
          [
            { text: 5, style: "center" },
            { text: 'PIPA NEPEL 10CM SS304 2"', style: "left" },
            { text: 1, style: "center" },
            { text: "pcs", style: "center" },
          ],
        ],
      },
    },
    {
      // ttd
      margin: [0, 30, 0, 0],
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
      color: "black",
      alignment: "center",
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
  },
  defaultStyle: {
    columnGap: 0,
    fontSize: 10,
    lineHeight: 1,
  },
};
