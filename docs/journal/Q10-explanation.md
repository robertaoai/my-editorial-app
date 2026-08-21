# The Q10 Decision (Tool vs. Product Scope)

**The Big Question (Tool vs. Product)**
* Are we building a private internal tool just for you (the Chief Editor), or a multi-tenant product for many different publishing companies?

**Why We Have to Decide Now (The S1 Window)**
* If this is a product for many companies, we need a special "nametag" (a tenancy column in the database) on every single article so the system knows exactly who owns what.

**The Danger of Waiting**
* If we decide it's a product *later*, going back to attach nametags to thousands of old articles is a massive headache. 
* We need this nametag system in the blueprint *before* we start our first real build (Sprint 1).

**What You Need to Do**
* Read the project Charter.
* Make the call on whether this is an internal tool or a multi-company product.
* Record your decision. Your answer unblocks Stage D (`0002` migration).
