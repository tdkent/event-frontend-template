<script setup lang="ts">
	// Imports
	import { EnvelopeIcon } from '@heroicons/vue/24/outline';
	// Internal Imports
	import { showRulesLinks } from '~/data/nav';
	// Intersection Observer API
	const intersectPoint: globalThis.Ref<Element | null> = ref(null);
	const showButton = ref(false);
	onMounted(() => {
		const observer = new IntersectionObserver(handleIntersection);
		observer.observe(intersectPoint.value as Element);
	});
	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				showButton.value = true;
			} else showButton.value = false;
		});
	};
</script>

<template>
	<div class="relative">
		<RulesBackToTop :show="showButton" />
		<h2>Rules &amp; Regulations</h2>
		<div ref="intersectPoint" />
		<UAccordion
			color="white"
			variant="ghost"
			size="lg"
			class="mt-6"
			:items="[{ label: 'On this page', slot: 'sub-nav' }]">
			<template #sub-nav>
				<UVerticalNavigation :links="showRulesLinks" />
			</template>
		</UAccordion>
		<!-- CLASS LIMITS -->
		<section class="mt-10">
			<UDivider
				id="class-limits"
				label="Class Limits" />
			<ul class="show-rules">
				<li>3 entries per shower, per class.</li>
				<li>
					Extra horses may be added for an additional $1 a model to a maximum of
					6 models.
				</li>
			</ul>
		</section>
		<!-- GENERAL RULES -->
		<section>
			<UDivider
				id="general-rules"
				label="General Rules" />
			<ul class="show-rules">
				<li>
					This is a 3x5-card show. Standard Region 2 card format will be used.
					Showers need to provide a 3x5 index card for each entry; shower's name
					and horse's name go on one side, and the class number, breed, and
					gender of the horse go on the reverse.
					<RulesExampleCard />
				</li>
				<li>Halters are not recommended for Halter classes.</li>
				<li>
					If you have a question about where a horse will go, please ask the
					judge or showholder.
				</li>
				<li>
					At the judge&apos;s/showholder&apos;s discretion, a shower may be
					asked to moved their entry to another class/division if the judge
					deems the entry incorrectly placed.
				</li>
				<li>
					If a shower chooses to lay their entry down on the table rather than
					place it in a standing position, they give the judge the authority to
					pick up the horse for judging so that they can view the other side of
					the model. The judge must be allowed to pick up such models for
					judging.
				</li>
				<li>
					Decisions of the judges are final! Please do not question them while
					they are judging a class. If you have a question regarding a placing,
					please ask the judge politely and promptly after the class.
				</li>
				<li>
					Please do not hover while the judge is judging a class! Likewise,
					please refrain from interrupting the judges while they are judging a
					class.
				</li>
				<li>
					Do not touch any models other than your own unless you have the
					specific permission of the owner.
				</li>
				<li>
					Anyone using bad behavior or language, or exhibiting poor
					sportsmanship, will be asked to leave the show hall with no refund.
					The judge's decisions are final.
				</li>
				<li>
					NO SMOKING in the building. You may smoke outside, away from the door,
					as long as you properly dispose of the butts.
				</li>
				<li>NO ALCOHOLIC BEVERAGES on the premises.</li>
				<li>Questions? Please ask the judge or one of the showholders.</li>
			</ul>
		</section>
		<!-- GENERAL CLASS INFORMATION -->
		<section>
			<UDivider
				id="general-class-information"
				label="General Class Information" />
			<ul class="show-rules">
				<li>
					Classes may be split, combined or canceled, depending upon the number
					of entries, at the discretion of the judge and/or showholder.
				</li>
			</ul>
		</section>
		<!-- DOCUMENTATION -->
		<section>
			<UDivider
				id="documentation"
				label="Documentation" />
			<ul class="show-rules">
				<li>
					Documentation for your horses is welcomed and is highly recommended
					for unusual breeds, colors, or coat patterns. Please don&apos;t assume
					the judges know everything there is to know about every breed and
					color. As a courtesy to other showers, please limit the size of your
					documentation to a maximum of 8-1/2 x 11 inches. DO NOT include
					documentation for common breeds, unless the model is showing with an
					unusual color.
				</li>
			</ul>
		</section>
		<!-- TEAM ENTRIES -->
		<section>
			<UDivider
				id="team-entries"
				label="Team Entries" />
			<ul class="show-rules">
				<li>
					Team entries (mother/daughter, sisters, wife/husband) are considered
					as one entrant unless individual fees are paid for both. Team models
					may be shown under either person’s name or barn name. The team is
					allowed only the individual number of entries per class unless full
					individual fees for each person have been paid.
				</li>
			</ul>
		</section>
		<!-- PROXY SHOWING -->
		<section>
			<UDivider
				id="proxy-showing"
				label="Proxy Showing" />
			<ul class="show-rules">
				<li>
					There is a flat fee listed on the entry form for proxy showers. Proxy
					showers are allowed a maximum of 20 horses per day of the show. Table
					space will not be provided and the entry card must show the name of
					the horse owner and the proxy shower.
				</li>
			</ul>
		</section>
		<!-- RAFFLE -->
		<section>
			<UDivider
				id="raffle"
				label="Raffle" />
			<ul class="show-rules">
				<li>
					The raffle will be held at approximately 2-3pm each day. We gladly
					accept donations for the raffle up to and including the show date.
				</li>
			</ul>
		</section>
		<!-- FOOD -->
		<section>
			<UDivider
				id="food"
				label="Food" />
			<ul class="show-rules">
				<li>
					No lunch will be provided. You are welcome to bring lunch, or to get
					something from one of the several places nearby. There is also a local
					grocery store. We will provide approximately an hour break for lunch
					starting around 12-noon. Judges' food will be ordered through DoorDash
					the night before. Please check with me if you want to order and
					pre-pay for your food that way.
				</li>
			</ul>
		</section>
		<!-- SHOW HALL -->
		<section>
			<UDivider
				id="show-hall"
				label="Show Hall" />
			<ul class="show-rules">
				<li>
					The show hall will be locked after the end of the show on Saturday. No
					one will be allowed access until 8AM on Sunday. You may leave your
					possessions overnight at your own risk. Under no circumstances will
					show affiliates or the hotel be held responsible for lost, stolen, or
					damaged property. Please use your best judgment when leaving your
					things. Entrants are responsible for their own property.
				</li>
			</ul>
		</section>
		<!-- DIVISION DEFINITIONS -->
		<section>
			<UDivider
				id="division-definitions"
				label="Division Definitions" />
			<ul class="show-rules">
				<li>
					A Custom is an OF plastic horse that has been repainted, haired,
					and/or modified through resculpting of the body.
				</li>
				<li>
					A Custom Glazed horse is defined as a fired, non-production color.
					Minor facial marking changes are not considered CG. To be considered a
					production run color, a run must consist of more than 1 horse with the
					same color/markings and must be noted as such by the manufacturer.
				</li>
				<li>
					An Artist Resin is defined as any artist-designed and released, or
					artist-made and released sculpture with no specific number of models
					in the run. Repainted factory run chinas and resins, such as the
					Breyer releases, Animal Artistry and Northlights, will show in this
					division.
				</li>
				<li>
					A China is defined as a fired, production color. To be considered a
					production run color, a run must consist of more than 1 horse with the
					same color/markings and must be noted as such by the manufacturer.
				</li>
				<li>
					The Kids Division is open to anyone 12-years-old and under. Entrants
					in the Kids Division may also show under Novice.
				</li>
				<li>
					The Novice Division is open to anyone who has shown in fewer than 5
					previous model horse shows. There is no age criteria.
				</li>
			</ul>
		</section>
		<!-- JUDGING CRITERIA -->
		<section>
			<UDivider
				id="judging-criteria"
				label="Judging Criteria" />
			<ul class="show-rules">
				<li>
					Breed Classes: Best Representative of the Breed based on ABCs
					(Anatomy, Biomechanics and Conformation) and Workmanship.
				</li>
				<li>
					Workmanship Classes: Horses will be judged on the quality of the prep
					work and the paint job and the overall finish or glaze. The quality of
					the sculpture and the ABCs of the sculpture will not be judged.
				</li>
				<li>
					Collectibility Classes: Horses will be judged only on their condition
					and rarity. Showers are encourgaed to provide as much information on
					each model as they can on an additional 3X5 card, since there are a
					lot of chinas out there, some of them exceptionally rare. Other
					documentation is also welcome.
				</li>
				<li>
					Solid horse class entries will have no stockings above the knee or
					hock, or anywhere else on the body; face markings are allowed. Entries
					with any other coat colors will show in Color horse class.
				</li>
				<li>
					The Kids Division is open to anyone 12-years-old and under. Entrants
					in the Kids Division may also show under Novice.
				</li>
				<li>
					The Novice Division is open to anyone who has shown in fewer than 5
					previous model horse shows. There is no age criteria.
				</li>
				<li>
					Performance:
					<ul>
						<li>
							Correctness of ABC's — that is, anatomy, biomechanics and
							conformation
						</li>
						<li>
							Ability of model to perform accurately and safely the activity
							presented.
						</li>
						<li>Suitability and fit of tack.</li>
						<li>
							Accuracy and presentation of entry, including documentation.
						</li>
					</ul>
				</li>
			</ul>
			<MainInfoBox>
				Please note: Performance classes will be judged based on USA Equestrian
				(formerly AHSA) rules, appropriate show association rules or appropriate
				breed association rules, whichever the judge thinks is most appropriate,
				unless documentation is presented stating otherwise. It is highly
				recommended that documentation be included on all performance entries,
				and that the entrant never assume the judge will know what your
				intentions are. Western and English Pleasure classes are open to ALL
				breeds and each entry will be judged based on that entries' breed
				standards.
			</MainInfoBox>
		</section>
		<!-- BREED GUIDELINES -->
		<section class="items-start">
			<UDivider
				id="breed-guidelines"
				label="Breed Guidelines" />
			<div class="">
				<h4 class="mt-0">Arabian</h4>
				<p>
					All purebred Arabian strains recognized by the Arabian Horse Registry.
				</p>
				<MainInfoBox class="mb-0">
					Please Note: The Shagya Arabian although of Arabian ancestry is not
					"of type" as recognized by AHR and should be shown in Other Sport.
				</MainInfoBox>
				<h4>Half-Arabian</h4>
				<p>
					All part Arabians of extreme Arab type show in this class. Part
					Arabians showing more type of their other half should show in Other
					Light/Part Breed, or where appropriate for their body type. For
					instance, a QuArab that appears more like a Pure Arab would be shown
					in Part Arabs in the Arab division, whereas a QuArab that appears more
					like a Quarter Horse would be shown in Other Stock/ Partbred in the
					Stock division. National Show Horses- both gaited and non-gaited will
					show in NSH classes.
				</p>
				<h4>European Warmblood</h4>
				<p>
					Examples are Belgian Warmblood, Budyonny, Danish Warmblood, Danubian,
					Dutch Gronigen, Dutch Warmblood, East Bulgarian, Finnish Universal,
					French Trotter, Gelderlander, Hispano, Holstiener, Hungarian
					Warmblood, Irish Draft, Kadruber, Knabstrup, Latvia, Mecklenbury,
					Oldenburg, Rhinelander, Salerno, Selle Francais, Swedish Warmblood.
				</p>
				<h4>American Warmblood, Other Warmblood, Sport Horses</h4>
				<p>
					Examples are Akhal Teke, American Sport Horse, Appaloosa Sport Horse,
					Canadian Sport Horse, Furious, Metis Trotter, Nonius, Terek, Waler,
					Westphalian and all other pure or part of the above breeds showing
					Warmblood characteristics, used for all aspects of combined training.
				</p>
				<h4>Carriage Breeds</h4>
				<p>
					Such as Cleveland Bay, Friesian, Hackney Horse, Norman Cob, Orlov
					Trotter, Welsh Cob, all other pure or part of the above breeds showing
					Cob, or Carriage characteristics, used for driving.
				</p>
				<h4>Gaited Horse</h4>
				<p>
					Any breeds exhibiting gaited characteristics, i.e. is NATURALLY
					inclined to perform gaits other than a walk, trot, and canter (such as
					a running walk, rack, foxtrot, etc.) A high trot does NOT constitute a
					specialized gait. The Spanish Walk is a movement that can be taught to
					any well-conformed breed and is not a gait. Spanish breed or descended
					breeds such as a Paso Fino or Peruvian Paso are encouraged but not
					required to show in Spanish Breeds, rather than here. Gaited Pony
					breeds should show here (Hackney, which is not gaited, go in Ponies)
					American Saddlebred (5 Gaited only) American Spotted Saddlehorse,
					Missouri Forxtrotter, TWH, Rocky Mountain Horse, Walkaloosa, all other
					pure or part breeds showing gaited characteristics.
				</p>
				<h4>Ponies</h4>
				<p>
					Any breed exhibiting pony characteristics of height and conformation,
					or those generally recognized as "pony." Gaited ponies (ponies which
					do more than a walk, trot, or canter-a high trot is NOT a specialized
					gait) should show in the Gaited Breeds. American Saddle Pony, American
					Shetland, American Walking Pony, Assateague, Bali, Basque, Batak,
					British Shetland, British Spotted Pony, Carmargue, Cayuse Indian Pony,
					Chincogeague, Chinese, Feel Pony, Galiceno, Hackney Pony, Marwari,
					Mongolian, Paint Pony, POA, Quarter Pony, Rocky Mountain Pony and any
					other pure or part ponies exhibiting pony characteristics, EXCEPT
					gaited pony breeds.
				</p>
				<h4>American Miniature Horses</h4>
				<p>
					Please show your miniature horses in the Ponies section “Other
					Purebred/ Partbred”.
				</p>
				<h4>Stock Breeds</h4>
				<p>
					Any breed typically used for working stock, or of a body type
					considered as "stock", Appaloosa, Australian Stock Horse, Canadian
					Cutter, Colorado Rangerbred, Mustang, Paint, Quarter Horse. All breeds
					not listed that would be used in its native country or region for
					working stock or general ranch work. Any other pure- or part-breed
					exhibiting stock characteristics.
				</p>
				<h4>Draft Breeds</h4>
				<p>
					Any breed typically used for medium or heavy draft work, including
					pulling loads, farm work, etc. and exhibiting draft confirmation.
					Ardennais, Auxios, Belgian, Brabant, Boulannais, Breton, Clydesdale,
					Comtois, Dole Gubrandsdal, Dutch Draft, Suffolk Punch, Swedish
					Ardennes, Vladimer Heavy Draft and any pure or part breeds showing
					draft characteristics or conformation, used for heavy farm/harness
					work.
				</p>
				<h4>Spanish Breeds</h4>
				<p>
					Breed originating and perpetuated in the Spanish/Iberian region of
					Europe and any breed developed and now bred primarily in the New World
					(North and South America) with roots in the Spanish/Iberian region of
					Europe. Alter Real, Andalusian, Lipizzan, Lustiano, Azteca, Barb,
					Criollo, Paso Fino, Peruvian Paso, all other breeds pure or part
					exhibiting similar characteristics and bred primarily in the
					Spanish/Iberian region of Europe.
				</p>
				<h4>Other Purebreds</h4>
				<p>
					Unless there is a class whose specifications suit these breeds, this
					group to be shown in Other Purebreds: American Cream, Bahskir Curly,
					Brumby, Don, Kathiawari, Lokai, Malapolski, Turkoman, Wielopolski, all
					other pure or part breeds of light bone and confirmation, used for
					general riding purposes, harness and or light draft work. Partbreds
					should compete in the halter section best suited to their conformation
					and type.
				</p>
				<h4>Longears, Exotics</h4>
				<p>
					All non-domesticated, extinct, or living primitive breeds, including
					Donkeys, Burros, Mules, Przewalski, Tarpan/Wild Pony/ Wild Ass,
					Onager, Quagga, and Zebra.
				</p>
			</div>
		</section>
		<!-- SHOW HOLDERS -->
		<section>
			<UDivider
				id="show-holders"
				label="Show Holders" />

			<div class="flex w-full justify-between">
				<span> Robin Kent </span>
				<div class="flex items-center gap-1">
					<a
						href="mailto:saklani2@gmail.com"
						class="link"
						>saklani2@gmail.com</a
					>
				</div>
			</div>
		</section>
	</div>
</template>
