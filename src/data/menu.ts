export type Product = {
  name: string;
  price: string; // formatted, e.g. "6.500 DT"
  description?: string;
  image?: string; // slug used to lookup generated image
  section?: string; // optional sub-section within a category
};

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
  sectionOrder?: string[]; // ordering of sub-sections
};

const s = (slug: string) => slug.toLowerCase().replace(/\s+/g, "-");

const DADI_SUCRE = "Chocolat + fruits secs + fruits de saison + boule de glace";
const DADI_SALE = "Thon + fromage + salami + jambon";

export const categories: Category[] = [
  {
    id: "nos petit dej",
    title: "Petit Déjeuner",
    subtitle: "Commencez la journée en douceur",
    products: [
      {
        name: "Petit Déj Express",
        price: "6.500 DT",
        description: "Café + croissant ou cake + jus citron + eau 0,5L",
        image: s("petit-dej-express"),
      },
      {
        name: "Petit Déj Enfant",
        price: "8.000 DT",
        description:
          "Lait + céréales + yaourt + mini pancake chocolat + jus orange/citron + eau 0,5L",
        image: s("petit-dej-enfant"),
      },
      {
        name: "Petit Déj Light",
        price: "10.000 DT",
        description:
          "Café ou thé infusion + jus orange/citron + omelette fromage + jambon + fromage + pain complet + yaourt nature + eau 0,5L",
        image: s("petit-dej-light"),
      },
      {
        name: "Petit Déj Gourmand",
        price: "12.000 DT",
        description:
          "Café + croissant ou cake + jus orange/citron + omelette fromage + jambon + salami + fromage + beurre + confiture + chocolat + pain de mie + eau 0,5L",
        image: s("petit-dej-gourmant"),
      },
      {
        name: "Petit Déj Dadi",
        price: "15.000 DT",
        description:
          "Café + croissant ou cake + jus orange/citron + omelette fromage + jambon + salami + fromage + beurre + confiture + chocolat + pain de mie + mini pancake chocolat + yaourt + salade de fruits + eau 0,5L",
        image: s("petit-dej-dadi"),
      },
    ],
  },
  {
    id: "nos sales",
    title: "Nos Salés",
    subtitle: "Omelettes · Crêpes salées · Paninis",
    sectionOrder: ["Omelettes", "Crêpes salées", "Paninis"],
    products: [
      // Omelettes
      { section: "Omelettes", name: "Omelette Thon + Fromage", price: "8.500 DT", image: s("omlette-thon-fromage") },
      { section: "Omelettes", name: "Omelette Salami + Fromage", price: "8.500 DT", image: s("omlette-salami-fromage") },
      { section: "Omelettes", name: "Omelette Jambon + Fromage", price: "8.500 DT", image: s("omlette-jambon-fromage") },
      { section: "Omelettes", name: "Omelette Thon + Fromage + Jambon", price: "9.500 DT", image: s("omlette-thon-fro-jam") },
      { section: "Omelettes", name: "Omelette Dadi", price: "12.000 DT", description: DADI_SALE, image: s("omelette-dadi") },
      // Crêpes salées
      { section: "Crêpes salées", name: "Crêpe Thon + Fromage", price: "8.500 DT", image: s("crepe-thon-fromage") },
      { section: "Crêpes salées", name: "Crêpe Salami + Fromage", price: "8.500 DT", image: s("crepe-salami-fromage") },
      { section: "Crêpes salées", name: "Crêpe Jambon + Fromage", price: "8.500 DT", image: s("crepe-jambon-fromage") },
      { section: "Crêpes salées", name: "Crêpe Thon + Fromage + Jambon", price: "9.500 DT", image: s("crepe-thon-jam-fro") },
      { section: "Crêpes salées", name: "Crêpe Dadi", price: "12.000 DT", description: DADI_SALE, image: s("crepe-dadi") },
      // Paninis
      { section: "Paninis", name: "Panini Thon + Fromage", price: "8.500 DT", image: s("Panini thon") },
      { section: "Paninis", name: "Panini Salami + Fromage", price: "8.500 DT", image: s("Panini salami") },
      { section: "Paninis", name: "Panini Jambon + Fromage", price: "8.500 DT", image: s("panini jambon") },
      { section: "Paninis", name: "Panini Thon + Fromage + Jambon", price: "9.500 DT", image: s("panini mix") },
      { section: "Paninis", name: "Panini Dadi", price: "12.000 DT", description: DADI_SALE, image: s("panini dadi") },
    ],
  },
  {
    id: "sucres",
    title: "Nos Sucrés",
    subtitle: "Crêpes · Gaufres · Pancakes",
    sectionOrder: ["Crêpes", "Gaufres", "Pancakes"],
    products: [
      // Crêpes
      { section: "Crêpes", name: "Crêpe Chocolat", price: "7.000 DT", image: s("crepe chocolat") },
      { section: "Crêpes", name: "Crêpe Chocolat + Fruits Secs", price: "9.500 DT", image: s("crepe chocolat fruit sec") },
      { section: "Crêpes", name: "Crêpe Chocolat + Fruits de Saison", price: "9.500 DT", image: s("crepe fruit saison") },
      { section: "Crêpes", name: "Crêpe Nutella", price: "8.500 DT", image: s("crepe nutella") },
      { section: "Crêpes", name: "Crêpe Nutella + Fruits Secs", price: "11.000 DT", image: s("crepe nutella secs") },
      { section: "Crêpes", name: "Crêpe Nutella + Fruits de Saison", price: "11.000 DT", image: s("crepe nutella saison") },
      { section: "Crêpes", name: "Crêpe Nutella + Oreo", price: "11.000 DT", image: s("crepe oreo") },
      { section: "Crêpes", name: "Crêpe Nutella + Spéculoos", price: "11.000 DT", image: s("crepe speculos") },
      { section: "Crêpes", name: "Crêpe Dadi", price: "13.000 DT", description: DADI_SUCRE, image: s("crepe dadi sucree") },
      // Gaufres
      { section: "Gaufres", name: "Gaufre Chocolat", price: "8.000 DT", image: s("gaufre chocolat") },
      { section: "Gaufres", name: "Gaufre Chocolat + Fruits Secs", price: "10.000 DT", image: s("gaufre secs") },
      { section: "Gaufres", name: "Gaufre Chocolat + Fruits de Saison", price: "10.000 DT", image: s("gaufre saison") },
      { section: "Gaufres", name: "Gaufre Nutella", price: "9.500 DT",  image: s("gauffre nutella")},
      { section: "Gaufres", name: "Gaufre Nutella + Fruits Secs", price: "12.000 DT", image: s("gaufre nutella secs") },
      { section: "Gaufres", name: "Gaufre Nutella + Fruits de Saison", price: "12.000 DT", image: s("gaufre nutella saison") },
      { section: "Gaufres", name: "Gaufre Nutella + Oreo", price: "12.000 DT", image: s("gaufre oreo") },
      { section: "Gaufres", name: "Gaufre Nutella + Spéculoos", price: "12.000 DT", image: s("gaufre speculoos") },
      { section: "Gaufres", name: "Gaufre Dadi", price: "14.000 DT", description: DADI_SUCRE, image: s("gaufre dadi") },
      // Pancakes
      { section: "Pancakes", name: "Pancake Chocolat", price: "8.000 DT", image: s("pancake chocolat") },
      { section: "Pancakes", name: "Pancake Chocolat + Fruits Secs", price: "10.000 DT", image: s("pancake chocolat secs") },
      { section: "Pancakes", name: "Pancake Chocolat + Fruits de Saison", price: "10.000 DT", image: s("pancake chocolat saison") },
      { section: "Pancakes", name: "Pancake Nutella", price: "9.500 DT", image: s("pancake nutelle") },
      { section: "Pancakes", name: "Pancake Nutella + Fruits Secs", price: "12.000 DT", image: s("pancake nutella secs") },
      { section: "Pancakes", name: "Pancake Nutella + Fruits de Saison", price: "12.000 DT", image: s("pancake nutella saison") },
      { section: "Pancakes", name: "Pancake Nutella + Oreo", price: "12.000 DT", image: s("pancake oreo") },
      { section: "Pancakes", name: "Pancake Nutella + Spéculoos", price: "12.000 DT", image: s("pancake speculoos") },
      { section: "Pancakes", name: "Pancake Dadi", price: "14.000 DT", description: DADI_SUCRE, image: s("pancake dadi") },
    ],
  },
  {
    id: "nos cafes",
    
    title: "Café",
    subtitle: "L'art du café italien",
    products: [
      { name: "Express", price: "3.200 DT", image: s("express") },
      { name: "Capucin", price: "3.400 DT", image: s("cappucin") },
      { name: "Café Crème", price: "3.700 DT", image: s("cafe creme") },
      { name: "Nespresso", price: "4.000 DT", image: s("espresso") },
      { name: "Nespresso Capucin", price: "4.200 DT", image: s("nespresso capucin") },
      { name: "Nespresso Café Crème", price: "4.500 DT", image: s("nespresso creme") },
    ],
  },
  {
    id: "aromatise",
    
    title: "Café Aromatisé",
    subtitle: "Saveurs raffinées",
    products: [
      { name: "Café Turc", price: "4.000 DT", image: s("turc") },
      { name: "Nescafé", price: "5.000 DT", image: s("nescafe") },
      { name: "Caramel", price: "5.000 DT", image: s("caramel") },
      { name: "Noisette", price: "5.000 DT", image: s("noisette") },
      { name: "Cappuccino", price: "5.000 DT", image: s("cappucino") },
      { name: "Cappuccino Chantilly", price: "6.000 DT", image: s("chantilly") },
    ],
  },
  {
    id: "nos the",
    
    title: "Thé",
    subtitle: "Tradition tunisienne",
    products: [
      { name: "Thé à la Menthe Frais", price: "2.500 DT", image: s("the menthe") },
      { name: "Thé à la Menthe Sirop", price: "3.000 DT", image: s("the sirop") },
      { name: "Thé Infusion", price: "3.500 DT", description: "Vert, verveine", image: s("infusion") },
      { name: "Assiette Amandes Secs/Frais", price: "5.500 DT", image: s("amande") },
      { name: "Thé aux Amandes", price: "8.000 DT", image: s("the amande") },
      {
        name: "Assiette Dadi Fruits Secs",
        price: "11.000 DT",
        description: "Amandes, noix, noisettes, pistaches, dattes & fruits secs de saison",
        image: s("asiette dadi"),
      },
    ],
  },
  {
    id: "chaud",
    
    title: "Chocolat Chaud",
    subtitle: "Onctueux et réconfortant",
    products: [
      { name: "Classique", price: "6.500 DT", image: s("chocolat  classique") },
      { name: "Crème Chantilly", price: "8.000 DT", image: s("chocolat chantilly") },
      { name: "Fruits Secs", price: "9.500 DT", image: s("choco secs") },
      {
        name: "Chocolat Dadi",
        price: "11.000 DT",
        description: "Chocolat chaud onctueux + chantilly + fruits secs + éclats de chocolat",
        image: s("choco dadi"),
      },
    ],
  },
  {
    id: "nos milkshake",
    
    title: "Milk Shake",
    subtitle: "Frais et gourmand",
    products: [
      { name: "Chocolat", price: "8.000 DT", image: s("milkshake choco") },
      { name: "Fraise", price: "8.000 DT", image: s("milk fraise") },
      { name: "Vanille", price: "8.000 DT", image: s("milk vanille") },
      { name: "Noisette", price: "8.000 DT", image: s("milk noisette") },
      { name: "Fruits Rouges", price: "9.500 DT", image: s("milk red") },
      { name: "Oreo", price: "9.500 DT", image: s("milk oreo") },
      { name: "Snickers", price: "9.500 DT", image: s("milk snickers") },
      { name: "Spéculoos", price: "9.500 DT", image: s("milk speculos") },
      { name: "Nutella", price: "11.000 DT", image: s("milk nutella") },
      { name: "Nutella Oreo", price: "11.000 DT", image: s("milk nutella oreo") },
      { name: "Nutella Spéculoos", price: "11.000 DT", image: s("milk nutella speculos") },
    ],
  },
  {
    id: "nos frappucino",
    
    title: "Frappuccino",
    subtitle: "Café glacé premium",
    products: [
      { name: "Noisette", price: "8.000 DT", image: s("frap noisette") },
      { name: "Caramel", price: "8.000 DT", image: s("frap caramel") },
      { name: "Oreo", price: "9.500 DT", image: s("frap oreo") },
      { name: "Snickers", price: "9.500 DT", image: s("frap snickers") },
      { name: "Nutella", price: "9.500 DT", image: s("frap nutella") },
      { name: "Nutella Spéculoos", price: "11.000 DT", image: s("frap speculoos") },
      { name: "Nutella Oreo", price: "11.000 DT", image: s("milk dadi") },
    ],
  },
  {
    id: "nos jus",
    
    title: "Jus Frais",
    subtitle: "Pressés à la minute",
    products: [
      { name: "Orange", price: "5.000 DT", image: s("orange") },
      { name: "Citron", price: "6.000 DT", image: s("citron") },
      { name: "Citron Sorbet", price: "7.500 DT", image: s("citron sorbet") },
      { name: "Citron aux Amandes", price: "8.500 DT", image: s("citron amande") },
      { name: "Citron Granite", price: "7.000 DT", image: s("citron granite") },
      { name: "Lait de Poule", price: "8.000 DT", image: s("lait de pole") },
      { name: "Fraise", price: "8.000 DT", image: s("fraise") },
      { name: "Pêche", price: "8.000 DT", image: s("peche") },
      { name: "Kiwi", price: "8.000 DT", image: s("kiwi") },
    ],
  },
  {
    id: "nos mojito",
    
    title: "Mojito",
    subtitle: "Frais et rafraîchissants",
    products: [
      { name: "Classique", price: "8.000 DT", image: s("mojito") },
      { name: "Bleu", price: "9.000 DT", image: s("bleu") },
      { name: "Fraise", price: "9.000 DT", image: s("mojito fraise") },
      { name: "Fruits Rouges", price: "9.000 DT", image: s("rouge") },
      { name: "Ananas", price: "9.000 DT", image: s("ananas") },
      { name: "Énergétique", price: "11.000 DT", image: s("energitique") },
    ],
  },
  {
    id: "nos cocktails",
    
    title: "Cocktail",
    subtitle: "Créations sans alcool",
    products: [
      { name: "Peppermint", price: "8.000 DT", image: s("peppermint") },
      { name: "Duo", price: "10.000 DT", image: s("duo") },
      { name: "Cocktail Fruits", price: "13.000 DT", image: s("fruits") },
      { name: "Mixy Datte", price: "13.000 DT", image: s("mixy datte") },
      {
        name: "Cocktail Dadi",
        price: "13.000 DT",
        description: "Mélange exclusif de fruits frais de saison, jus pressés & sirops maison",
        image: s("cocktail dadi"),
      },
      {
        name: "Jmejem Dadi",
        price: "13.000 DT",
        description: "Cocktail signature aux fruits exotiques, lait & touche de miel",
        image: s("jmejem"),
      },
    ],
  },
  {
    id: "nos glaces",
    
    title: "Glaces",
    subtitle: "Douceurs glacées",
    products: [
      { name: "Duo (2 boules)", price: "7.000 DT", image: s("glace duo") },
      { name: "Trio (3 boules)", price: "8.500 DT", image: s("trio") },
      {
        name: "Glace Dadi",
        price: "13.000 DT",
        description: "Assortiment de boules de glace + fruits secs + fruits de saison + chantilly + nappage chocolat",
        image: s("glace dadi"),
      },
      { name: "Salade de Fruits", price: "14.000 DT", image: s("salade fruits") },
      { name: "Banane Split", price: "14.000 DT", image: s("banane") },
      { name: "Fruits de Saison", price: "18.000 DT", image: s("fruits saisons") },
    ],
  },
  {
    id: "nos boissons",
    
    title: "Boissons",
    subtitle: "Sodas et eaux",
    products: [
      { name: "Boîte Soda", price: "4.200 DT", image: s("soda") },
      { name: "Boga Menthe", price: "5.000 DT", image: s("boga") },
      { name: "Boisson Énergétique", price: "8.000 DT", image: s("energie") },
      { name: "Eau Minérale 0.5L", price: "1.800 DT", image: s("eau 0.5") },
      { name: "Eau Minérale 1L", price: "3.200 DT", image: s("eau 1l") },
      { name: "Eau Gazéifiée 1L", price: "3.200 DT", image: s("eau gaz") },
    ],
  },
  {
    id: "chicha",
    
    title: "Chicha",
    subtitle: "L'art de la dégustation",
    products: [
      { name: "Chicha Parfumée", price: "8.000 DT", description: "Raisin · Menthe · Pomme", image: s("chicha parfume") },
      { name: "Love", price: "9.000 DT", image: s("chicha-love") },
      { name: "Cheikh Money", price: "9.000 DT", image: s("chicha cheikh money") },
      { name: "Shwingum", price: "9.000 DT", image: s("chicha shwingam") },
    ],
  },
];

export const contact = {
  name: "Dadi Salon De Thé",
  address: "Korniche, Sfax, Tunisia",
  phone: "+216 24 254 022",
  phoneRaw: "+21624254022",
  whatsapp: "https://wa.me/21624254022",
  instagram: "https://www.instagram.com/dadi.lounge/",
  instagramHandle: "@dadi.lounge",
  maps: "https://www.bing.com/maps/default.aspx?where1=Korniche%2C%20Sfax%2C%20Tunisia%2C%203000",
  hours: "Tous les jours · 07h00 – 01h00",
};
