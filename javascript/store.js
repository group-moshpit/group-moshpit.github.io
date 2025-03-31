document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".access-bar a");
    const sections = document.querySelectorAll("section");
    const carousel = document.querySelector(".carousel-section");

    function showTab(targetId) {
        sections.forEach(section => {
            section.style.display = section.id === targetId || targetId === "all" ? "block" : "none";
        });

        carousel.style.display = targetId === "all" ? "block" : "none";

        tabs.forEach(tab => {
            tab.classList.toggle("active", tab.getAttribute("href").substring(1) === targetId);
        });
    }

    showTab("all");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            showTab(this.getAttribute("href").substring(1));
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const addToCartBtn = document.querySelector('.btn-warning');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    }

    const buyNowBtn = document.querySelector('.btn-success');
    if (buyNowBtn) {
        buyNowBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to proceed to payment?')) {
                alert('Proceeding to checkout!');
                window.location.href = "payment.html";
            } else {
                alert('Purchase cancelled');
            }
        });
    }
});
const menuItems = [
    {
        title: "Bug Out Ultra Ticket Box",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsku_assets%2Fbundle.general1.large.1.png&w=384&q=75",
        description: "A premium box filled with exclusive items to enhance your gameplay experience. It includes valuable raid passes, incense, and lucky eggs to help you catch more Pokémon and level up faster. Perfect for trainers looking to maximize their time in the game.",
        price: "₱59.00"
    },
    {
        title: "Power Up Ticket Ultra Ticket Box",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-stg-assets%2Fpgo%2Fsku_assets%2Fbundle.general.adventure.1.png&w=384&q=75",
        description: "Boost your Pokémon's power with this ultra ticket box. It contains rare items that will help you upgrade your Pokémon faster, giving you an edge in battles and raids. Great for trainers who want to increase their Pokémon’s CP and dominate in battles.",
        price: "₱289.00"
    },
    {
        title: "GO Rocket Box",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsku_assets%2Fbundle.general1.rocket.1.png&w=384&q=75",
        description: "Defeat Team GO Rocket grunts and leaders with ease using the GO Rocket Box. This box contains powerful items like super potions and rare candy, which will help you battle through challenging Rocket events. Perfect for those who want to take on the Rocket menace with ease.",
        price: "₱289.00"
    },
    {
        title: "Ultra Raid Box",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-stg-assets%2Fpgo%2Fsku_assets%2Fbundle.general.remotebox.small.1.png&w=384&q=75",
        description: "Gear up for epic raids with the Ultra Raid Box. This pack includes powerful raid items and remote raid passes, allowing you to participate in remote raids from anywhere. Ideal for those who want to engage in more raids without being physically present at the raid location.",
        price: "₱149.00"
    },
    {
        title: "Might and Mastery Box",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsku_assets%2Fbundle.general4.small.1.png&w=384&q=75",
        description: "Unlock your true potential with the Might and Mastery Box. Packed with essential items to boost your skills and in-game strength, this box contains items that will help you during intense battles and raids. Perfect for players who want to enhance their in-game performance and strategic play.",
        price: "₱149.00"
    },
    {
        title: "Super Incubator x2",
        image: "https://pokemongohub.net/wp-content/uploads/2017/08/EggIncubatorSuper_Empty.png",
        description: "Speed up your egg hatching process with 2 Super Incubators. This item accelerates the time it takes for your eggs to hatch, ensuring you can quickly obtain new Pokémon. Great for players who are actively trying to hatch specific Pokémon or just want to hatch eggs faster.",
        price: "₱88.00"
    },
    {
        title: "Egg Incubator x3",
        image: "https://fevgames.net/wp-content/uploads/2016/07/Empty.png",
        description: "A staple for any trainer who is working on hatching Pokémon. The Egg Incubator x3 helps incubate multiple eggs at once, allowing for efficient egg hatching. Perfect for trainers who are working on completing their Pokédex or looking for specific Pokémon.",
        price: "₱88.00"
    },
    {
        title: "Max Revive x6",
        image: "https://img.rankedboost.com/wp-content/uploads/2016/08/Pokemon-Go-Revive.png",
        description: "Max Revives are essential for trainers who want to restore their fainted Pokémon to full health. This pack of 6 Max Revives will ensure you're always ready for the next battle or raid, giving your Pokémon a full recovery to fight on.",
        price: "₱88.00"
    },
    {
        title: "Premium Battle Pass x3",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsku_assets%2Fitem_paid_raid_ticket.png&w=384&q=75",
        description: "The Premium Battle Pass gives you exclusive access to special raids, events, and rewards. With this pack of 3 Premium Battle Passes, you'll be able to participate in high-tier raids and receive rare in-game rewards that can only be unlocked through the Premium Battle Pass.",
        price: "₱88.00"
    },
    {
        title: "Max Particle Pack x6",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsku_assets%2Fitem_mp_replenish.png&w=384&q=75",
        description: "Max Particle Pack x6 is designed to replenish your max particles, which are used in the most advanced game features. This pack ensures that you never run out of essential resources needed for your next big in-game goal.",
        price: "₱235.00"
    },
    {
        title: "Max Mushroom x3",
        image: "https://leekduck.com/assets/img/items/Max%20Mushroom.png",
        description: "Max Mushrooms are key to enhancing your Pokémon's abilities. Use this pack of 3 Max Mushrooms to help your Pokémon gain powerful boosts during battles or raids. A must-have for trainers looking to increase their Pokémon's battle potential.",
        price: "₱289.00"
    },
    {
        title: "110 PokéCoins",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsku_assets%2Fcoin-bundle-xxsmall.png&w=384&q=75",
        description: "100 + 10 Web Store Bonus = 110 total PokéCoins.",
        price: "₱29.00"
    },
    {
        title: "600 PokéCoins",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsku_assets%2Fcoin-bundle-xsmall.png&w=384&q=75",
        description: "550 + 50 Web Store Bonus = 600 total PokéCoins.",
        price: "₱149.00"
    },
    {
        title: "1,300 PokéCoins",
        image: "https://storage.googleapis.com/platform-webstore-rel-assets/pgo/sku_assets/coin-bundle-small_v2.png",
        description: "1,200 + 100 Web Store Bonus = 1,300 total PokéCoins.",
        price: "₱289.00"
    },
    {
        title: "2,700 PokéCoins",
        image: "https://storage.googleapis.com/platform-webstore-rel-assets/pgo/sku_assets/coin-bundle-medium_v2.png",
        description: "2,500 + 200 Web Store Bonus = 2,700 total PokéCoins.",
        price: "₱589.00"
    },
    {
        title: "5,600 PokéCoins",
        image: "https://storage.googleapis.com/platform-webstore-rel-assets/pgo/sku_assets/coin-bundle-large-v2.png",
        description: "5,200 + 400 Web Store Bonus = 5,600 total PokéCoins.",
        price: "₱1,170.00"
    },
    {
        title: "15,500 PokéCoins",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsku_assets%2Fcoin-bundle-xlarge.png&w=384&q=75",
        description: "14,500 + 1,000 Web Store Bonus = 15,500 total PokéCoins.",
        price: "₱2,950.00"
    },
    {
    title: "Exclusive Adventure Box",
    image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-dev-assets%2Fpgo%2Fsku_assets%2Fweb-boost-box-1223.png&w=256&q=75",
    description: "The Exclusive Adventure Box is a premium package designed for avid Pokémon trainers. Inside this box, you'll find raid passes that allow you to participate in exclusive raids, incense to attract rare Pokémon, and lucky eggs to double your experience points.",
    price: "₱499.00"
    },
    {
        title: "Pokémon GO Fest 2025: Global Ticket",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsite_assets%2FPGO2025_Global_withoutlogo_withoutlegallines_W1334%2520x%2520H600px.png&w=3840&q=75",
        description: "A special one-time-only ticket to Pokémon GO Fest 2025 Global event, providing exclusive access and rewards.",
        price: "₱439.00"
    },
    {
        title: "Exclusive Raid Bundle",
        image: "https://store.pokemongolive.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fplatform-webstore-rel-assets%2Fpgo%2Fsite_assets%2FPGO2025_Global_withoutlogo_withoutlegallines_W1334%2520x%2520H600px.png&w=3840&q=75",
        description: "Get 10 Raid Passes & Bonus Items to enhance your experience in exclusive raids.",
        price: "₱299.00"
    }
];

function openPopup(menuItemIndex) {
    const menuItem = menuItems[menuItemIndex];
    document.getElementById("popup-title").innerText = menuItem.title;
    document.getElementById("popup-image").src = menuItem.image;
    document.getElementById("popup-description").innerText = menuItem.description;
    document.getElementById("popup-price").innerText = "Price: " + menuItem.price;
    document.getElementById("popup").classList.add("active");
}

function closePopup() {
    document.getElementById("popup").classList.remove("active");
}