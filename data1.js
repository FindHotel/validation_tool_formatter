/**
 * Created by danilr on 02/10/2017.
 */
let hotelsArr = [
    /*'Premier_Inn_Bath_City_Centre', 'Premier_Inn_Brighton_City_Centre', 'New_York_Marriott_Marquis', 'Premier_Inn_Cardiff_City_Centre', 'Rydges_Southbank_Brisbane', 'Hyatt_Regency_Trinidad', 'Hilton_Coylumbridge_Aviemore', 'Rydges_Sydney_Airport_Hotel', 'Premier_Inn_Liverpool_Albert_Dock', 'W_Hotel_Barcelona', 'Shangri_La_Hotel_At_The_Shard_London', 'Makkah_Clock_Royal_Tower_A_Fairmont_Hotel', 'Premier_Inn_London_Gatwick_Airport_North_Terminal', 'Hotel_Ritz_Madrid', 'Ibis_Amsterdam_Centre', 'Conrad_Resort_and_Casino_Punta_del_Este', 'Swissotel_Makkah', 'Walt_Disney_World_Swan', 'Melia_Alicante', 'Rydges_Mount_Panorama_Bathurst', 'Tropical_Islands', 'Premier_Inn_Victoria_London', 'Mantra_Towers_of_Chevron', 'JW_Marriott_Marquis_Dubai', 'New_York_Hilton_Midtown', 'Novotel_Wollongong_Northbeach', 'Peppers_Noosa_Resort_Villas', 'Premier_Inn_York_City_Blossom_St_North', 'Pullman_Paris_Tour_Eiffel', 'Sheraton_New_York_Times_Square_Hotel', 'Le_Royal_Monceau_Raffles_Paris', 'AC_Hotel_Malaga_Palacio_A_Marriott_Luxury_Lifestyle_Hotel', 'Clarion_Hotel_Sign', 'Makkah_Hilton_Towers', 'Pullman_Zamzam_Makkah', 'Movenpick_Hotel_Residence_Hajar_Tower_Makkah', 'Rydges_Port_Macquarie', 'Holiday_Inn_Express_Bath', 'Ibis_Sydney_Darling_Harbour', 'Le_Meridien_Ra_Beach_Hotel_Spa', 'Tryp_Gran_Via', 'Quality_Hotel_Friends', 'Ibis_Sheffield_Centre', 'Barcelo_Monasterio_de_Boltana_Hotel', 'Holiday_Inn_Plymouth', 'Crowne_Plaza_Times_Square_Manhattan', 'The_Westin_Peachtree_Plaza', 'Lalandia_Billund_Resort', 'Hotel_Baltic_Zinnowitz', 'Hotel_Pennsylvania_New_York', 'Spreewald_Thermenhotel', 'La_Quinta_Inn_Suites_Manhattan', 'Axel_Hotel_Guldsmeden', 'Ahorn_Hotel_Am_Fichtelberg', 'Rydges_Melbourne', 'Radisson_Blu_Plaza_Hotel_Oslo', 'Grand_Hyatt_New_York', 'Row_NYC_Hotel', 'Radisson_Blu_Hotel_Berlin', 'Novotel_Sydney_on_Darling_Harbour', 'Peppers_Salt_Resort_Spa', 'AARHUS_Guldsmeden_Hotel', 'Clarion_Hotel_Copenhagen_Airport', 'Walt_Disney_World_Dolphin', 'The_Towers_of_the_Waldorf_Astoria', 'Premier_Inn_Chester_City_Centre', 'Premier_Inn_Manchester_Airport', 'Marriotts_Maui_Ocean_Club_Molokai_Maui_Lanai_Towers', 'Le_Parker_Meridien', 'Travelodge_Edinburgh_Central', 'Melia_Madrid_Serrano', 'Hilton_Molino_Stucky_Venice', 'Hotel_Neptun_Rostock', 'Melia_Granada', 'Maagan_Kibbutz_Holiday_Village', 'Park_Inn_by_Radisson_York_City_Centre', 'AC_Hotel_Bella_Sky_Copenhagen', 'Hyatt_Regency_Aruba_Resort_Casino', 'TUI_Magic_Life_Fuerteventura', 'Boston_Marriott_Copley_Place', 'Atahotel_Tanka_Village_Golf_SPA', 'Premier_Inn_Euston_London', 'Novotel_Paris_Centre_Tour_Eiffel', 'Travelodge_London_Covent_Garden', 'Park_Inn_by_Radisson_Berlin_Alexanderplatz', 'KeyLime_Cove_Resort_and_Water_Park', 'Rydges_North_Sydney', 'Pan_Pacific_Melbourne', 'Hotel_Am_Park_Rust', 'Hotel_Fuerte_Grazalema', 'Hotel_Sheraton', 'The_Waldorf_Astoria', 'Holiday_Inn_Madrid_Bernabeu', 'Viva_Wyndham_Dominicus_Beach_Resort_Bayahibe', 'Les_Tresoms_Lake_and_Spa_Resort', 'Sheraton_Vistana_Villages_Resort_Villas', 'Four_Seasons_Hotel_Ritz_Lisboa', 'Delta_Hotels_by_Marriott_Kananaskis_Lodge', 'Days_Inn_Liverpool', 'Clarion_Hotel_Post', 'AC_Hotel_Cuzco_A_Marriott_Luxury_Lifestyle_Hotel', 'Cavo_Tagoo', 'Hyatt_Regency_Maui_Resort_Spa', 'Amsterdam_Marriott_Hotel', 'Parador_de_Cadiz', 'The_Westin_Excelsior_Rome', 'NH_Collection_Amsterdam_Grand_Hotel_Krasnapolsky', 'Kauai_Marriott_Resort', 'Holiday_Inn_Harrogate', 'Rydges_Capital_Hill_Canberra', 'Pullman_Timi_Ama_Sardegna', 'Premier_Inn_Belfast_City_Centre_Alfred_Street', 'Torfhaus_HARZRESORT', 'Ramada_Plaza_Southport', 'DoubleTree_Suites_by_Hilton_NYC_Times_Square', 'Tulip_Inn_Amsterdam_Centre', 'The_Westin_Palace_Madrid', 'Radisson_Blu_Royal_Garden_Hotel_Trondheim', 'Hotel_les_bains_dArguin', 'Le_Meridien_Etoile', 'Melia_Castilla', 'A_Quinta_Da_Auga_Hotel_Spa_Relais_Chateaux', 'Hotel_Golden_Tulip_Amsterdam_West', 'Atlantis_The_Palm', 'Premier_Inn_Canterbury_City_Centre', 'Sheraton_on_the_Park_Sydney', 'Clarion_Collection_Hotel_Packhuset', 'Sheraton_Waikiki', 'Surfers_Paradise_Marriott_Resort_Spa', 'Parador_de_Cuenca', 'Ramada_Ballina_Byron', 'Rose_Garden_Resort_Spa', 'Michelberger_Hotel', 'Premier_Inn_London_Kings_Cross_St_Pancras', 'Travelodge_Belfast_City', 'Hotel_Esperanto_Fulda', 'Pullman_Bunker_Bay_Resort_Margaret_River', 'Sheraton_Mirage_Hotel_Port_Douglas', 'AC_Hotel_Carlton_A_Marriott_Luxury_Lifestyle_Hotel', 'Melia_Lebreros', 'Sydney_Harbour_Marriott', 'Ibis_Birmingham_International_Airport_NEC', 'Best_Alcazar', 'Pullman_Reef_Hotel_Casino', 'Radisson_Blu_Royal_Viking_Hotel_Stockholm', 'St_Pancras_Renaissance_Hotel_London_A_Marriott_Luxury_Lifestyle_Hotel', 'Holiday_Inn_Midtown_57th_Street', 'Melia_Costa_del_Sol', 'The_Hampton_Inn_Times_Square_North', 'Marriott_Aruba_Resort_Stellaris_Casino', 'The_View_Hotel', 'AC_Santo_Mauro_Autograph_Collection', 'Ciragan_Palace_Kempinski_Istanbul', 'Holiday_Inn_York', 'Fairfield_Inn_Suites_by_Marriott_New_York_Manhattan_Times_Square', 'Desert_Springs_JW_Marriott_Resort_Spa', 'Ibis_Paris_Cdg_Airport', 'Holiday_Inn_Cardiff_City', 'Fairmont_Le_Chateau_Frontenac', 'Clarion_Hotel_Gillet', 'Rydges_Esplanade_Resort_Cairns', 'Ibis_Milano_Centro', 'Tryp_Alameda', 'Mantra_Southbank_Melbourne', 'Le_Meridien_Makkah', 'Hotel_Ringberg', 'DoubleTree_by_Hilton_Metropolitan_New_York_City', 'Dorfhotel_Boltenhagen', 'Royal_Decameron_Mompiche', 'Hyatt_Regency_Birmingham', 'Hotel_Macia_Alfaros', 'Ystad_Saltsjobad', 'Premier_Inn_Liverpool_City_Centre_Moorfields', 'Melia_Zaragoza', 'Barcelo_Isla_Canela', 'Park_Hyatt_Jeddah_Marina_Club_and_Spa', 'Park_Plaza_Westminster_Bridge_London', 'Falkenberg_Strandbad', 'Grand_Hyatt_Bali', 'Gran_Hotel_Elba_Estepona_Thalasso_Spa', 'Pension_Yvonne_Sigg', 'Premier_Inn_Birmingham_NECAirport', 'Premier_Inn_London_Ealing', 'Glasgow_Marriott_Hotel', 'Radisson_Blu_Hotel_Amsterdam', 'Wyndham_New_Yorker_Hotel', 'Hotel_Carter', 'Dorfhotel_Fleesensee', 'Travelodge_Birmingham_Central', 'Rydges_Parramatta', 'New_York_Marriott_Downtown', 'Hotel_Sol_Principe', 'Marina_Bay_Sands', 'Sofitel_Dubai_Jumeirah_Beach', 'Tryp_Cordoba', 'Travelodge_Torrelaguna_Madrid', 'Sheraton_Denver_Downtown_Hotel', 'Doubletree_by_Hilton_Dunblane_Hydro', 'Rixos_The_Palm_Dubai', 'Clarion_Collection_Hotel_Drott', 'Premier_Inn_London_Heathrow_Airport_Bath_Road', 'Novotel_Paris_Les_Halles', 'Premier_Inn_Durham_City_Centre', 'Premier_Inn_Dublin_Airport_Swords', 'Sheraton_Le_Centre_Montreal_Hotel', 'DoubleTree_by_Hilton_York', 'Mantra_On_Russell', 'Park_Plaza_Victoria_Amsterdam', 'Strand_Palace_Hotel_London', 'Royal_Horizon_Baobab', 'Novotel_Paris_Gare_de_Lyon', 'JW_Marriott_Bucharest_Grand_Hotel', 'Liverpool_Marriott_Hotel_City_Centre', 'Conrad_New_York', 'Sheraton_Centre_Toronto_Hotel', 'Cardiff_Marriott_Hotel', 'Disneyland_Hotel', 'W_London_Leicester_Square', 'Raffles_Makkah_Palace', 'Ramada_Apollo_Amsterdam_Centre', 'Melia_Salinas', 'Melia_Sevilla', 'Novotel_Auckland_Airport', 'The_Principal_Edinburgh_George_Street', 'Le_Meridien_Piccadilly', 'Hostellerie_La_Cheneaudiere_Relais_Chateaux', 'Sol_Tenerife', 'Marriotts_Aruba_Surf_Club', 'NH_Gran_Hotel_Casino_de_Extremadura', 'Parador_de_Leon', 'Premier_Inn_London_Leicester_Square', 'Travelodge_Hotel_Melbourne_Southbank', 'NH_Zamora_Palacio_del_Duero', 'Scandic_Byporten', 'Peppers_Waymouth_Hotel', 'Ibis_Budget_Birmingham_Centre', 'H10_Conquistador', 'Copenhagen_Marriott_Hotel', 'Rydges_Lakeland_Resort_Queenstown', 'Belmond_Copacabana_Palace', 'Paris_Marriott_Hotel_Champs_Elysees', 'Westin_Maui_Resort_And_Spa', 'Shap_Wells_Hotel', 'Elaf_Kinda', 'Park_Inn_by_Radisson_Nottingham', 'Marriott_Chicago_Downtown_Magnificent_Mile', 'Parador_de_Siguenza', 'Ibis_Paris_Tour_Eiffel', 'Allegro_Isora', 'Hotel_De_Zeeuwse_Stromen', 'Sheraton_Grand_Mirage_Resort_Gold_Coast', 'Rydges_Hobart', 'Mercure_Paris_Centre_Tour_Eiffel', 'Hospes_Palacio_de_los_Patos', 'Clarion_Collection_Hotel_Odin', 'Radisson_Blu_Es_Hotel_Rome', 'Sheraton_Batumi_Hotel', 'Jugendherberge_Freiburg', 'Mainport_Design_Hotel', 'SeeHuus_Hotel', 'AC_Hotel_Los_Vascos_A_Marriott_Luxury_Lifestyle_Hotel', 'Sofitel_Philippine_Plaza_Manila', 'JW_Marriott_Marco_Island_Beach_Resort', 'The_Westin_Memphis_Beale_Street', 'Sofitel_London_Heathrow', 'Hilton_Liverpool_City_Centre', 'Radisson_Blu_Manchester_Airport', 'JW_Marriott_Essex_House_New_York', 'Renaissance_Aruba_Resort_and_Casino_A_Marriott_Luxury_Lifestyle_Hotel', 'Melia_White_House', 'JW_Marriott_Hotel_Mumbai', 'Residence_Inn_Mont_Tremblant_Manoir_Labelle', 'Marriotts_Ko_Olina_Beach_Club', 'Sheraton_Tribeca_New_York_Hotel', 'Le_Meridien_Ile_des_Pins', 'Hilton_London_Kensington', 'Marriotts_Grand_Chateau', 'Premier_Inn_George_Square_Glasgow', 'Rydges_World_Square_Sydney_Hotel', 'Tryp_Tenerife', 'Iberostar_Royal_Andalus', 'Santa_Claus_Holiday_Village', 'Sofitel_Bali_Nusa_Dua_Beach_Resort', 'Clarion_Hotel_Stockholm', 'Savoy_Hotel_London', 'AC_Hotel_Avenida_de_America_A_Marriott_Luxury_Lifestyle_Hotel', 'Waldorf_Astoria_Edinburgh_The_Caledonian', 'The_Ritz_Carlton_Istanbul', 'Mantra_Parramatta', 'Park_Inn_by_Radisson_Oslo_Airport', 'Hyatt_Hotel_Canberra_A_Park_Hyatt_Hotel', 'Inntel_Hotels_Amsterdam_Centre', 'Radisson_Blu_Waterfront_Hotel', 'Al_Safwah_Towers_Hotel_Dar_Al_Ghufran', 'Four_Seasons_Hotel_George_V_Paris', 'The_Ritz_Carlton_Abama', 'Barcelo_Aruba_All_Inclusive', 'Pullman_Paris_Montparnasse', 'New_York_Marriott_East_Side', 'Le_Meridien_Phuket_Beach_Resort', 'The_Sheraton_San_Diego_Hotel_Marina', 'LImperial_Palace', 'Parador_de_Granada', 'Hilton_Bath_City', 'Kempinski_Hotel_Bristol', 'Barcelo_Sevilla_Renacimiento', 'Holiday_Inn_Express_Perth', 'Radisson_Blu_Hotel_Bucharest', 'Travelodge_Barcelona_Poblenou', 'Tryp_Leon', 'Hilton_London_Metropole', 'Holiday_Inn_London_Kensington', 'Edison_Hotel_New_York_City', 'Hilton_London_Stansted_Airport', 'Hotel_Macia_Plaza', 'The_Westin_New_York_at_Times_Square', 'Scandic_Nidelven', 'Peppers_Cradle_Mountain_Lodge', 'The_Grand_Brighton', 'Radisson_Blu_Hotel_Cardiff', 'Cumulus_City_Centre_Kuopio', 'Adina_Apartment_Hotel_Sydney_Town_Hall', 'Clarion_Hotel_Royal_Christiania', 'Medplaya_Hotel_Bali', 'Tryp_Madrid_Centro', 'Courtyard_by_Marriott_New_York_Manhattan_Midtown_East', 'Sofitel_Algiers_Hamma_Garden', 'Tryp_Cibeles', 'Ibis_Wien_Mariahilf', 'The_Pierre_A_Taj_Hotel_New_York', 'Melia_Benidorm', 'Four_Points_by_Sheraton_Midtown_Times_Square', 'QT_Canberra', 'Ramada_Eastside', 'Travelodge_Dublin_Airport_North_Swords', 'Amstel_Botel_Hotel_Amsterdam', 'Sheraton_on_the_Falls', 'Ibis_York_Centre', 'Barcelo_Raval', 'Ibis_budget_Roissy_CDG_Paris_Nord_2', 'Residence_Le_Village_Cancalais_Cancale', 'Jumeirah_Zabeel_Saray', 'Courtyard_by_Marriott_Madrid_Princesa', 'Mantra_Boathouse_Apartments', 'Ibis_Budget_Manchester_Salford_Quays', 'Hilton_Glasgow_Grosvenor_Hotel', 'Mantra_Bell_City', 'Warsaw_Marriott_Hotel', 'Melia_Valencia', 'URH_Palacio_de_Oriol', 'Apparthotel_Bommelje', 'Scandic_St_Olavs_Plass', 'Aqua_Dome_4_Sterne_Superior_Hotel_Tirol_Therme_Langenfeld', 'Peppers_Airlie_Beach', 'Rydges_Camperdown', 'Melia_Plaza', 'LHermitage_Gantois_Autograph_Collection_A_Marriott_Luxury_Lifestyle_Hotel', 'Budapest_Marriott_Hotel', 'The_Ritz_London', 'Holiday_Inn_Resort_Aruba_Beach_Resort_Casino', 'Occidental_Jandia_Playa', 'Marriott_York_Hotel', 'Sheraton_Grand_Chicago', 'Sheraton_Vistana_Resort_Villas_Lake_Buena_VistaOrlando', 'Marriotts_Grande_Vista', 'Badhotel_Domburg', 'Ibis_London_Euston_Station_St_Pancras_International', 'Radisson_Blu_SkyCity_Hotel', 'Melia_Sancti_Petri', 'Logis_Les_Elmes', 'Wyndham_Resort_Torquay', 'Wakeup_Copenhagen_Carsten_Niebuhrs_Gade', 'Manila_Marriott_Hotel', 'Grand_Hotel_Ter_Duin', 'Niagara_Falls_Marriott_Fallsview_Hotel_Spa', 'Holiday_Inn_Club_Vacations_At_Orange_Lake_Resort', 'Radisson_Blu_Resort_Spa_Malta_Golden_Sands', 'Park_Plaza_Cardiff', 'Mantra_on_Jolimont', 'Scandic_The_Reef', 'Hyatt_Regency_Paris_Etoile', 'Ibis_London_Earls_Court', 'Hotel_Phoenicia_Malta_Valletta', 'Occidental_Isla_Cristina', 'Novotel_Liverpool_Centre', 'The_Langham_London', 'Radisson_Blu_Saga_Hotel_Reykjavik', 'Parkhotel_Laurin', 'Mantra_on_Hay', 'Boscolo_Exedra_Roma_Autograph_Collection', 'The_Ritz_Carlton_South_Beach', 'BEST_WESTERN_Hotel_des_Nordens', 'Fletcher_Hotel_Amsterdam', 'AC_Hotel_Barcelona_Forum_A_Marriott_Luxury_Lifestyle_Hotel', 'Hilton_Cologne', 'Radisson_Blu_Resort_Split', 'The_Ritz_Carlton_Chicago_A_Four_Seasons_Hotel', 'Premier_Inn_Oxford', 'InterContinental_New_York_Times_Square', 'Sheraton_Stockholm_Hotel', 'Clarion_Hotel_Congress_Trondheim', 'Fell_Centre_Kiilopaa', 'The_Marmara_Taksim', 'Le_Meridien_NFis', 'Melia_Sitges', 'NH_Palacio_De_Oquendo_Hotel', 'Hilton_Times_Square', 'Bertrams_Guldsmeden', 'Park_Inn_by_Radisson_Cardiff_City_Centre', 'Sol_Costablanca', 'Floreal_Hotel_Nieuwpoort', 'Orlando_World_Center_Marriott', 'Melia_Villaitana', 'Hotel_Zuiderduin', 'The_Ritz_Carlton_Riyadh', 'JW_Marriott_Hotel_Hong_Kong', 'Blooming_Hotel', 'Ibis_Edinburgh_Centre_Royal_Mile', 'Hilton_Dubai_Jumeirah_Beach', 'Conrad_Istanbul_Bosphorus', 'Rome_Marriott_Grand_Hotel_Flora', 'Holiday_Inn_Lincoln', 'Melia_Marbella_Banus', 'Bloc_Hotel_Gatwick', 'Ace_Hotel_London_Shoreditch', 'Gran_Melia_Fenix', 'Best_Beach_Hotel_Zoutelande', 'Ibis_Singapore_on_Bencoolen', 'Ritz_Carlton_Millenia_Singapore', 'Marriotts_Newport_Coast_Villas', 'Holiday_Inn_Hull_Marina', 'Occidental_Margaritas', 'Premier_Inn_Hereford', 'The_London_Edition', 'The_Ritz_Carlton_Dubai', 'The_Waldorf_Hilton_London', 'Hyatt_Regency_Tokyo', 'Sheraton_Laval_Hotel', 'Hyatt_Regency_Atlanta', 'AC_Hotel_Iberia_Las_Palmas_A_Marriott_Luxury_Lifestyle_Hotel', 'Premier_Inn_Dubai_International_Airport', 'Hilton_Aruba_Caribbean_Resort_Casino', 'Boston_Marriott_Long_Wharf', 'Ramada_Plaza_Manoir_du_Casino', 'Hotel_Chateau_Frontenac', 'Hamburg_Marriott_Hotel', 'H2_Hotel_Berlin_Alexanderplatz', 'Center_Parcs_Erperheide', 'Crowne_Plaza_Glasgow', 'Occidental_Granada', 'Ritz_Carlton', 'Manchester_Grand_Hyatt_San_Diego', 'Hilton_Garden_Inn_Times_Square', 'Morgans_New_York_Hotel', 'Hilton_Lac_Leamy', 'AKA_Central_Park', 'Jurys_Inn_Edinburgh', 'Hotel_Danmark', 'Premier_Inn_Belfast_Titanic_Quarter', 'Kruisherenhotel_Maastricht', 'Tryp_Murcia_Rincon_De_Pepe', 'Dan_Panorama_Eilat', 'Radisson_Blu_Royal_Hotel', 'Marriott_London_County_Hall', 'Vienna_Marriott_Hotel', 'Holiday_Inn_Seafront_Brighton_Hove', 'Melia_Madrid_Princesa', 'Hotel_Europaischer_Hof_Hamburg', 'Habtoor_Grand_Resort_Autograph_Collection', 'Barcelo_Santiago', 'Eurostars_Madrid_Tower', 'Ritz_Carlton_Cancun', 'Paris_Marriott_Rive_Gauche_Hotel_Conference_Center', 'Hotel_Ristorante_Bellora', 'Cairo_Marriott_Hotel_Omar_Khayyam_Casino', 'Le_Meridien_Noumea', 'Pullman_London_St_Pancras', 'Melia_Sierra_Nevada', 'Movenpick_Hotel_Gammarth_Tunis', 'Premier_Inn_Scarborough', 'Strandhotel_Bene', 'StrandResort_Markgrafenheide', 'Clarion_Hotel_Quebec_City', 'AC_Hotel_Aitana_A_Marriott_Luxury_Lifestyle_Hotel', 'Park_Hyatt_Sydney', 'Melia_Bilbao', 'H10_Gran_Tinerfe', 'Manhattan_Nyc_An_Affinia_Hotel', 'Ibis_Amsterdam_Centre_Stopera', 'Sofitel_Athens_Airport', 'The_Westin_Hotel_Europa_Regina_Venice', 'Le_Meridien_Nice', 'Bergstadens_Hotel_Scandic_Partner', 'Sheraton_Nashville_Downtown_Hotel', 'Iberostar_Grand_Hotel_Mencey', 'Best_Western_Robert_Treat', 'Citadines_Trafalgar_Square_London', 'Andaz_Amsterdam_Prinsengracht_A_Hyatt_Hotel', 'Hotel_Riu_Playa_Blanca', 'Holiday_Inn_Belfast_City_Centre', 'Gran_Melia_Colon', 'Radisson_Martinique_on_Broadway', 'Grosvenor_House_A_Luxury_Collection_Hotel_Dubai', 'Hotel_Estherea', 'Extremadura_Hotel', 'Sheraton_Boston_Hotel', 'Hotel_C_Stockholm', 'Courtyard_by_Marriott_Nashville_Downtown', 'Barcelo_Punta_Umbria_Mar', 'Novotel_York_Centre', 'Grand_Hotel_Kempinski_High_Tatras', 'Amwaj_Rotana', 'Suitehotel_Fariones_Playa', 'JW_Marriott_Hotel_Lima', 'Tryp_Alameda_Aeropuerto', 'Worsley_Park_A_Marriott_Hotel_Country_Club', 'Citadines_Les_Halles_Paris', 'Hyatt_Regency_Dubai', 'Anker_Hotel', 'Residence_Hunzebergen_Exloo', 'Radisson_Blu_Royal_Hotel_Dublin', 'Melia_Gorriones', 'Heerlickheijd_van_Ermelo', 'AC_Hotel_Manchester_Salford_Quays', 'Mantra_Tullamarine_Hotel', 'Clarion_Collection_Hotel_Folketeateret', 'Shangri_Las_Boracay_Resort_Spa', 'Kenzi_Club_Agdal_Medina', 'Al_Safwah_Royale_Orchid_Hotel', 'Corinthia_Hotel_Prague', 'Tryp_Alicante_Gran_Sol_Hotel', 'The_Westin_Dragonara_Resort', 'Club_Hotel_Riu_Bambu_Punta_Cana', 'Renaissance_Amsterdam_Hotel_A_Marriott_Luxury_Lifestyle_Hotel', 'Grand_Hyatt_Dubai', 'Le_Meridien_Beach_Plaza_Hotel_Monte_Carlo', 'Bournemouth_Highcliff_Marriott_Hotel', 'Disneys_Polynesian_Resort', 'Hotel_Playas_de_Guardamar', 'Melia_Palas_Atenea', 'Grand_Hyatt_Kauai_Resort_and_Spa', 'Premier_Inn_Chichester', 'Hampton_Inn_Suites_West_Point', 'Royal_National_Hotel', 'Mantra_on_the_Park', 'Copthorne_Tara_Hotel_London_Kensington', 'Portland_Marriott_Downtown_Waterfront', 'Durham_Marriott_Hotel_Royal_County', 'Tryp_Merida_Medea_Hotel', 'Travelodge_Heathrow_Terminal_5', 'Inselhotel_Poel', 'Four_Seasons_Resort_Maldives_at_Landaa_Giraavaru', 'YHA_London_Central', '25hours_Hotel_Bikini_Berlin', 'Holiday_Inn_London_Kensington_Forum', 'W_New_York', 'Sheraton_Grand_Hotel_Spa', 'Ibis_Liverpool_Centre_Albert_Dock_Liverpool_One', 'Crowne_Plaza_Chester', 'Rex_Hotel_Madrid', 'Dolphin_House_Apartments_London', 'Holiday_Club_Are', 'Rasta_Nordby', 'Marriott_Hotel_City_Centre', 'London_Marriott_Hotel_Regents_Park', 'Tryp_Madrid_Atocha_Hotel', 'Holiday_Inn_Walsall_M6_Jct_10', 'Clarion_Collection_Hotel_Fregatten', 'Sheraton_Fiji_Resort', 'Makati_Shangri_La_Manila', 'Radisson_Blu_Hotel_Lyon', 'Barcelo_Montecastillo_Golf', 'Hotel_Kempinski_Palace_Portoroz', 'Notre_Maison_Hotel_Cogne', 'Sheraton_Brussels_Hotel', 'The_Westin_Paris_Vendome', 'Le_Meridien_Bora_Bora', 'Royal_Dar_Al_Eiman', 'Hilton_Bora_Bora_Nui_Resort_Spa', 'Connect_Hotel_Arlanda', 'Corinthia_Hotel_Budapest', 'Parador_de_El_Saler', 'Novotel_Paris_Centre_Gare_Montparnasse', 'Novotel_Amsterdam_City', 'Barcelo_Malaga', 'Hyatt_Regency_Kyoto', 'Clarion_Collection_Hotel_Bilan', 'Carlton_Hotel_Guldsmeden', 'Travelodge_Resort_Darwin', 'First_Hotel_G', 'Le_Meridien_Lav_Split', 'AHORN_Berghotel_Friedrichroda', 'Hilton_Brighton_Metropole', 'Dunston_Hall', 'Hotel_Iberostar_Las_Dalias_Tenerife', 'Fairmont_Cairo_Nile_City', 'Hyatt_Regency_Hong_Kong_Sha_Tin', 'Shangri_La_Hotel_Paris', 'Sante_Royale_Hotel_Gesundheitsresort_Warmbad_Wolkenstein', 'Crowne_Plaza_Hotel_Nottingham', 'Hotel_Zenit_Imperial', 'Hotel_Zonneduin', 'Disneys_Fort_Wilderness_Resort_and_Campground', 'Sheraton_Iguazu_Resort_Spa_Puerto_Iguazu', 'Riu_Palace_Aruba', 'Hotel_Negresco', 'Tryp_Madrid_Plaza_Espana_Hotel', 'Hampton_Inn_Manhattan_Times_Square_South', 'Premier_Inn_Bicester', 'Sofitel_Legend_the_Grand_Amsterdam', 'Westin_Sydney', 'Carat_Golf_Sporthotel', 'NH_Collection_Amsterdam_Barbizon_Palace', 'Al_Bustan_Palace_a_Ritz_Carlton_Hotel', 'Waltham_Abbey_Marriott_Hotel', 'Hyatt_Regency_Orlando', 'Sheraton_Philadelphia_Downtown', 'Labranda_Les_Idrissides', 'Melia_Avenida_America', 'Sofitel_Noosa_Pacific_Resort', 'The_Westin_New_York_Grand_Central', 'Hilton_Prague', 'The_Roosevelt_Hotel', 'Radisson_Blu_Hotel_Krakow', 'The_Westbury_Hotel', 'First_Hotel_Reisen', 'Best_Western_Hotel_Major', 'Melia_Tamarindos', 'Kempinski_Hotel_Bahia', 'H10_Salauris_Palace', 'Sol_Timor_Apartamentos', 'Holiday_Inn_Express_Chester_Racecourse', 'NH_Carlton_Amsterdam', 'London_Marriott_Hotel_Twickenham', 'Ramada_Plaza_Milano', 'Element_New_York_Times_Square_West', 'Kakslauttanen_Arctic_Resort_Igloos_and_Chalets', 'Center_Parcs_Port_Zelande', 'Sofitel_Abidjan_Hotel_Ivoire', 'Hilton_Istanbul_Bomonti', 'Lagovida_Das_Ferienresort_Am_Stormthaler_See', 'Apollo_Hotel_Amsterdam', 'Sheraton_Seattle_Hotel', 'Travelodge_Cardiff_Central', 'Wyndham_Berlin_Excelsior', 'Holiday_Inn_Express_Madrid_Alcorcon', 'Ibis_Sydney_Airport', 'St_Kitts_Marriott_Resort_The_Royal_Beach_Casino', 'Radisson_Blu_Hotel_Marseille_Vieux_Port', 'Travelodge_London_Central_City_Road', 'Carlton_Rioja_Hotel_Logrono', 'Sheraton_Istanbul_Atakoy_Hotel', 'LEGOLAND_Feriendorf', 'RHO_Hotel', 'Melia_Berlin', 'Ibis_Leicester_City', 'Clarion_Hotel_Admiral', 'Vienna_House_Magic_Circus_at_Disneyland_Paris', 'ME_Cancun', 'Ibis_Lisboa_Centro_Saldanha', 'TRYP_Porto_Centro_Hotel', 'Hotel_Barriere_Le_Majestic_Cannes', 'Parador_de_Toledo', 'Haus_Thorwarth_Hotel_Garni', 'Crowne_Plaza_Hotel_Dundalk', 'Four_Seasons_Resort_Seychelles', 'Marriott_New_York_at_the_Brooklyn_Bridge', 'Viva_Wyndham_Dominicus_Palace', 'Premier_Inn_Torquay', 'Wyndham_Sea_Pearl_Resort', 'Premier_Inn_Southampton_West_Quay', 'Jamala_Wildlife_Lodge', 'Sofitel_Legend_Old_Cataract_Aswan', 'Park_Hotel_Kapyla', 'Days_Hotel_Waterloo', 'Grand_Hyatt_Singapore', 'Scandic_Victoria', 'Days_Inn_Bristol_Hotel_Gordano', 'MedPlaya_Hotel_Pez_Espada', 'Melia_Jardines_del_Teide', 'Sheraton_Dubai_Mall_of_the_Emirates_Hotel', 'Premier_Inn_Weston_Super_Mare_Seafront', 'Volkshotel', 'Barcelona_Universal_Hotel', 'Hilton_London_Tower_Bridge', 'The_St_Regis_Bora_Bora_Resort', 'Hilton_Colon_Guayaquil', 'Best_Western_Plus_Hotel_City_Copenhagen', 'Oslo_Guldsmeden', 'Berlin_Marriott_Hotel', 'Newcastle_Marriott_Hotel_Gosforth_Park', 'Marriott_Manchester_Victoria_Albert_Hotel', 'Melbourne_Short_Stay_Apartments', 'Disneys_Pop_Century_Resort', 'Sercotel_Suites_Viena', 'Eurostars_Hotel_de_la_Reconquista', 'Balneario_TermaEuropa_Hotel_Arnedillo', 'Aulani_Disney_Resort_Spa_in_Ko_Olina', 'The_Ritz_Carlton_Hong_Kong', 'Premier_Inn_Edinburgh_Princes_Street', 'Sunborn_Gibraltar', 'Sheraton_Paris_Airport_Hotel_Conference_Centre', 'Omega_Hotel_Amsterdam', 'Melia_Bali', 'Minto_Suite_Hotel', 'Tryp_Valencia_Oceanic_Hotel', 'Hyatt_Regency_Pier_Sixty_Six', 'Novotel_Krakow_Centrum', 'Le_Meridien_Dubai_Hotel_Conference_Centre', 'Maritim_Hotel_Dusseldorf', 'Sheraton_Miyako_Hotel_Tokyo', 'Comfort_Inn_Times_Square_South_Area', 'Tryp_Palma_Bellver_Hotel', 'Royal_Hideaway_Sancti_Petri', 'Tryp_Zaragoza', 'Sol_Don_Pablo', 'Breakfree_on_George', 'Lalandia_Rodby_Resort', 'Scandic_Berlin_Potsdamer_Platz', 'Motel_One_Wien_Westbahnhof', 'Holiday_Inn_Portsmouth', 'AC_Hotel_Palau_de_Bellavista_A_Marriott_Luxury_Lifestyle_Hotel', 'Sheraton_Diana_Majestic_Hotel', 'Renaissance_Naples_Hotel_Mediterraneo_A_Marriott_Luxury_Lifestyle_Hotel', 'Marriott_Savannah_Riverfront', 'Baltimore_Marriott_Waterfront', 'The_Nicolaus_Hotel', 'Hyatt_Regency_Miami', 'Premier_Inn_Edinburgh_Central', 'Sacacomie_Hotel_Saint_Alexis_des_Monts', 'Scandic_Kiannon_Kuohut', 'Premier_Inn_Bristol_City_Centre_Haymarket', 'DJH_Jugendherberge_Augsburg', 'Ibis_Belfast_City_Centre', 'Almdorf_Seinerzeit_Chalet_Reichenau_Carinthia', 'Radisson_Blu_Resort_Thalasso_Djerba', 'Scandic_Hamburg_Emporio', 'Premier_Inn_Dartford', 'Holiday_Inn_Amsterdam_Arena_Towers', 'Sofitel_Budapest_Chain_Bridge', 'Novotel_Perth_Langley', 'Sheraton_Miramar_Resort_El_Gouna', 'Dan_Panorama_Haifa', 'Bristol_Marriott_Royal_Hotel', 'Occidental_Murcia_7_Coronas', 'Las_Casas_de_la_Juderia_Seville', 'Thon_Hotel_Opera', 'Sheraton_Gran_Canaria_Salobre_Golf_Resort', 'Hotel_Riu_Palace_Tres_Islas', 'Days_Inn_Wetherby', 'Peppers_Broadbeach', 'Hilton_Surfers_Paradise_Residences', 'RukaTonttu_Hotel', 'Hilton_Hotel_Berlin', 'Ibis_London_Heathrow_Airport', 'Taj_Mahal_Palace', 'Holiday_Inn_Munich_City_Centre', 'Atahotel_Quark', 'Hotel_Het_Hoge_Duin', 'Clarion_Collection_Hotel_Tapto', 'Clarion_Collection_Hotel_Grand', 'The_Palmer_House_Hilton', 'Parador_de_Sos_del_Rey_Catolico', 'JW_Marriott_Hotel_Bangkok', 'Premier_Inn_London_Tower_Bridge', 'Park_Central_Hotel', 'Hotel_the_Wigwam', 'Sol_Pelicanos_Ocas', 'Four_Seasons_Resort_Bora_Bora', 'Iberostar_Bouganville_Playa', 'Ibis_Cardiff_Centre', 'TH_Las_Rozas', 'Camping_Village_Roma', 'Park_Inn_by_Radisson_Oslo', 'Ramada_Plaza_Jumeirah_Beach', 'Corendon_Vitality_Hotel_Amsterdam', 'Ramada_Bintang_Bali_Resort', 'Apartments_am_Brandenburger_Tor', 'Rydges_Southbank_Townsville', 'San_Diego_Marriott_Marquis_Marina', 'The_Westin_Boston_Waterfront', 'Holiday_Inn_Amsterdam', 'Rydges_Auckland', 'Eurohostel', 'Radisson_Blu_Portman_Hotel_London', 'London_Marriott_Hotel_Marble_Arch', 'Tryp_Barcelona_Apolo_Hotel', 'Hotel_Barriere_Le_Westminster', 'Hilton_Stockholm_Slussen', 'De_Vere_Beaumont_Estate', 'Hotel_Denia_La_Sella_Golf_Resort_Spa', 'Holiday_Inn_Express_Barcelona_City_22', 'Disneys_Hotel_Cheyenne', 'Four_Seasons_Hotel_Beirut', 'Gran_Melia_Rome', 'Hotel_Laguna_Parentium', 'Kempinski_Hotel_Grand_Arena', 'Holiday_Inn_Express_London_City', 'Hyatt_Regency_London_The_Churchill', 'TRYP_Malaga_Guadalmar_Hotel', 'Le_Meridien_Fishermans_Cove', 'Marriott_San_Antonio_Riverwalk', 'Noordzee_Hotel_Spa_Cadzand', 'Parador_de_Segovia', 'Leeds_Marriott_Hotel', 'Rome_Cavalieri_Waldorf_Astoria_Hotels_Resorts', 'Melia_Barcelona_Sarria', 'H10_Salou_Princess', 'BEST_WESTERN_Hotel_Ascot', 'W_Hong_Kong', 'Hotel_La_Pagerie', 'Club_Med_Bali', 'Premier_Inn_Leamington_Spa_Town_Centre', 'Hotel_Fazenda_Solar_das_Andorinhas', 'Tryp_Indalo_Almeria', 'Danubius_Hotel_Gellert', 'Plaza_Hotel_Buenos_Aires', 'Crowne_Plaza_Canberra', 'Cebu_City_Marriott_Hotel', 'Arthur_Hotel_Helsinki', 'Tryp_Madrid_Chamartin_Hotel', 'Holiday_Inn_Express_Portsmouth_Gunwharf_Quays', 'Travelodge_Hotel_Sydney_Wynyard', 'Holiday_Inn_Bar_Harbor_Regency_Hotel', 'The_Wyndham_Midtown_45', 'Hotel_Wilhelmina_Domburg', 'Cabinn_City', 'Enchantment_Resort', 'Ibis_Rabat', 'Apex_City_Quay_Hotel_Spa', 'Crowne_Plaza_Rome_St_Peters', 'Hyatt_Regency_Boston', 'Pullman_Berlin_Schweizerhof', 'The_Principal_London', 'Best_Western_Plus_Centre_villeCity_Centre_Quebec', 'Super_8_Downtown_Toronto', 'Hilton_Reykjavik_Nordica', 'JW_Marriott_Cannes', 'Gran_Melia_Don_Pepe', 'Amare_Marbella_Beach_Hotel', 'Pullman_Madrid_Airport_Feria', 'Holiday_Inn_Express_Lincoln_City_Centre', 'Park_Inn_by_Radisson_Palace_Southend_on_Sea', 'ME_London_by_Melia', 'Ibis_London_Blackfriars', 'IFA_Schoneck_Hotel_Ferienpark', 'Le_Royal_Meridien_Beach_Resort_Spa', 'Holiday_Inn_Express_Alcobendas', 'La_Mamounia_Marrakech', 'Citadines_Strasbourg_Kleber', 'Hilton_Cardiff', 'Hilton_Manchester_Deansgate', 'Riu_Plaza_The_Gresham_Dublin', 'Travelodge_Bristol_Central', 'Hilton_Edinburgh_Grosvenor', 'Mandalay_Bay_Resort_Casino', 'Quality_Hotel_Bordeaux_Centre', 'Parador_de_Salamanca', 'Travelodge_London_Southwark', 'Rydges_Campbelltown', 'Vital_Hotel_Meiser', 'Radisson_Blu_Iveria_Hotel_Tbilisi', 'Parador_de_Baiona', 'Be_Live_Collection_Saidia',
    */'Hotel_Fazenda_3_Poderes'/*,
    'Premier_Inn_Lincoln_City_Centre', 'Memmo_Alfama_Design_Hotel', 'Schoenhouse_Apartments', 'Novotel_Twin_Waters_Resort_Sunshine_Coast', 'Hilton_Toronto', 'Belmond_Hotel_das_Cataratas', 'Hilton_Paris_La_Defense_Hotel', 'St_Ermins_Hotel_Autograph_Collection_A_Marriott_Luxury_Lifestyle_Hotel', 'Melia_Recoletos', 'Le_Meridien_St_Julians_Hotel_And_Spa', 'Novotel_Suites_Paris_Montreuil_Vincennes', 'Disneys_All_Star_Sports_Resort', 'Barcelo_Corralejo_Bay_Adults_Only', 'Hotel_Casino_Perla', 'Hotel_Los_Agustinos', 'Thon_Hotel_Charlottenberg', 'Elaf_Al_Mashaer_Hotel', 'Premier_Inn_London_Stansted_Airport', 'QT_Sydney', 'Meininger_Hotel_Brussels_City_Center', 'Premier_Inn_Liverpool_City_Liverpool_One', 'Homewood_Suites_Midtown_Manhattan_Times_Square_South', 'Eurostars_Rey_Don_Jaime', 'Miami_Marriott_Biscayne_Bay', 'The_Peninsula_New_York', 'Hotel_Tryp_Oriente_Lisboa', 'Hotel_Residence_Hippotel', 'Lisbon_Marriott_Hotel', 'Hotel_Sonne_Fussen', 'Hotel_Eurostars_Maimonides', 'Holiday_Inn_Leicester', 'London_Hilton_on_Park_Lane', 'Pullman_Port_Douglas_Sea_Temple_Resort_and_Spa', 'Quirinale_Hotel', 'Millennium_Hotel_London_Mayfair', 'Holiday_Inn_Oxford', 'Holiday_Inn_Krakow_City_Centre', 'The_Westin_Lagunamar_Ocean_Resort', 'Club_Caleta_Dorada', 'Hotel_Moers_van_der_Valk', 'Hotel_Villa_Ingeborg_Bansin', 'Ramada_Downtown_Dubai', 'Disneyland_Hotel_Marne_La_Vallee', 'Hilton_London_Wembley', 'Sahara_Palace_Marrakech', 'Premier_Inn_Shrewsbury_Town_Centre', 'The_Ritz_Carlton_Aruba', 'Sandman_Signature_London_Gatwick', 'De_Vere_Orchard_Hotel', 'Marriott_Portsmouth', 'Hotel_de_Vassy', 'Ein_Gedi_Kibbutz_Hotel', 'Travelodge_Bath_Waterside', 'The_Westin_Denarau_Island_Resort_Spa_Fiji', 'The_Westin_Ottawa', 'Radisson_Blu_Hotel_Milan', 'Hilton_Makkah', 'Westin_Kaanapali_Ocean_Resort_Villas', 'Hilton_Hawaiian_Village_Waikiki_Beach_Resort', 'Ibis_Nottingham_Centre', 'Hotel_Fuerte_Marbella', 'La_Torre_del_Visco_Relais_Chateaux', 'Golden_Bahia_de_Tossa', 'Hotel_Altes_Kaufhaus', 'Holiday_Inn_Derby_Riverlights', 'Dan_Gardens_Ashkelon', 'Park_Lane_Hotel_New_York_City', 'Novotel_New_York_Times_Square', 'Hotel_Marrakech_New_York_City', 'Citadines_Place_dItalie_Paris', 'Sheraton_Hong_Kong_Hotel_Towers', 'Crowne_Plaza_Birmingham_City', 'Courtyard_by_Marriott_Glasgow_Airport', 'Hotel_Iberostar_Costa_Canaria_Gran_Canaria', 'Courtyard_Miami_at_Dolphin_Mall', 'Ibis_Bradford_Shipley', 'Best_Western_Premier_Maceio', 'The_Westin_Resort_Costa_Navarino', 'AC_Hotel_Atocha_A_Marriott_Luxury_Lifestyle_Hotel', 'Homewood_Suites_Mont_Tremblant', 'Travelodge_London_Stratford', 'Radisson_Blu_Resort_Gran_Canaria', 'W_Singapore_Sentosa_Cove', 'Fort_Lauderdale_Marriott_Harbor_Beach_Resort_Spa', 'Ramada_Jersey_City_Hotel', 'Timhotel_Berthier_Paris_17', 'Radisson_Blu_Hotel_Waterfront_Cape_Town', 'The_Aquincum_Hotel_Budapest', 'Holiday_Inn_Old_Sydney', 'Parador_de_Malaga_Gibralfaro', 'Hilton_London_Paddington', 'Sofitel_London_St_James', 'Hilton_Philadelphia_Penns_Landing', 'Best_Triton', 'Sheraton_Tel_Aviv_Hotel', 'Elite_World_Hotel', 'Hotel_Al_Shohada', 'Pentahotel_Birmingham', 'Ferienpark_Hambachtal_Hotel_Oberhambach', 'Domaine_du_Moulin_Hotel_Ensisheim', 'Melia_Paris_La_Defense', 'Tryp_Cadiz_La_Caleta_Hotel', 'Hotel_Granada_Center', 'De_Vere_Selsdon_Estate', 'Park_Hyatt_Melbourne', 'Hotel_Van_Oranje_Autograph_Collection', 'Hilton_Quebec', 'Mantra_French_Quarter', 'The_Westin_Grand_Cayman_Seven_Mile_Beach_Resort_Spa', 'Seminaris_Hotel_Luneburg', 'Sofitel_Lyon_Bellecour', 'InterContinental_Carlton_Cannes', 'Hyatt_Regency_Cologne', 'Le_Meridien_Tahiti', 'Hyatt_Ziva_Puerto_Vallarta', 'Wellington_Hotel_New_York_City', 'Sheraton_Lisboa_Hotel_Spa', 'Ban_Sabai_Spa_Village', 'Pueblo_Marinero', 'Sheraton_Maui_Resort_Spa', 'Parador_de_Olite', 'Hanbury_Manor_Marriott_Hotel_Country_Club', 'Iberostar_Club_Cala_Barca', 'Wentworth_by_the_Sea_A_Marriott_Hotel_Spa', 'AC_Hotel_Sevilla_Torneo_A_Marriott_Luxury_Lifestyle_Hotel', 'Le_Meridien_Towers_Makkah', 'Fletcher_Hotel_Burgh_Haamstede', 'Best_Western_Plaza_Hotel_New_York_City', 'ClubHotel_Riu_Guarana', 'Ramada_Encore_Leicester_City_Centre', 'Center_Parcs_De_Vossemeren', 'Hotel_Seegarten', 'Texelcamping_Loodsmansduin', 'Generator_Paris', 'Rydges_Fortitude_Valley'
*/
];